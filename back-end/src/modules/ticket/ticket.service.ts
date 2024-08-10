import { Injectable } from '@nestjs/common';
import { TicketEntity } from 'src/modules/db/entities/ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagination } from 'src/common/pagination';
import {
  AddTicketCommentDto,
  PaginatedTickets,
  SearchTicketDto,
  TicketStatusEnum,
  TicketType,
  UpdateTicketDto,
} from './ticket.types';
import { User } from 'src/modules/auth/user.decorator';
import { GraphQLError } from 'graphql';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(TicketEntity)
    private ticketRepository: Repository<TicketEntity>,
  ) {}

  async getTicket(id: string): Promise<TicketType> {
    return await this.ticketRepository.findOne({
      where: {
        id,
      },
    });
  }

  async lockTicket(id: string, user: User): Promise<TicketType> {
    const result = await this.ticketRepository.update(
      {
        id,
        status: TicketStatusEnum.OPEN,
      },
      {
        status: TicketStatusEnum.LOCKED,
        lockedByUserId: user.id,
      },
    );

    if (result.affected) {
      return await this.getTicket(id);
    }

    throw new GraphQLError("Can't lock the item!");
  }

  async skipTicket(id: string, user: User): Promise<TicketType> {
    const result = await this.ticketRepository.update(
      {
        id,
        status: TicketStatusEnum.LOCKED,
        lockedByUserId: user.id,
      },
      {
        status: TicketStatusEnum.OPEN,
        lockedByUserId: null,
      },
    );

    if (result.affected) {
      return await this.getTicket(id);
    }

    throw new GraphQLError("Can't release the item!");
  }

  async handleTicket(id: string, user: User): Promise<TicketType> {
    const result = await this.ticketRepository.update(
      {
        id,
        status: TicketStatusEnum.LOCKED,
        lockedByUserId: user.id,
      },
      {
        status: TicketStatusEnum.DONE,
      },
    );

    if (result.affected) {
      return await this.getTicket(id);
    }

    throw new GraphQLError(
      "Can't handle the item! The ticket not locket by you!",
    );
  }

  async updateTicket(
    updateTicketDto: UpdateTicketDto,
    user: User,
  ): Promise<TicketType> {
    const result = await this.ticketRepository.update(
      {
        id: updateTicketDto.id,
        status: TicketStatusEnum.LOCKED,
        lockedByUserId: user.id,
      },
      {
        title: updateTicketDto.title,
        description: updateTicketDto.description,
      },
    );

    if (result.affected) {
      return await this.getTicket(updateTicketDto.id);
    }

    throw new GraphQLError('The ticket not locket by you!');
  }

  async addTicketComment(
    addTicketCommentDto: AddTicketCommentDto,
    user: User,
  ): Promise<TicketType> {
    const result = await this.ticketRepository
      .createQueryBuilder()
      .update(TicketEntity)
      .set({
        comment: () => `array_append("comment", :newComment)`,
      })
      .where({
        id: addTicketCommentDto.id,
        status: TicketStatusEnum.LOCKED,
        lockedByUserId: user.id,
      })
      .setParameter('newComment', addTicketCommentDto.comment)
      .execute();

    if (result.affected) {
      return await this.getTicket(addTicketCommentDto.id);
    }

    throw new GraphQLError('The ticket not locket by you!');
  }

  async getNextAvailableTicket(): Promise<TicketType> {
    const result = await this.ticketRepository
      .createQueryBuilder()
      .where(
        `"createdAt" = (SELECT MIN("createdAt") FROM ${this.ticketRepository.metadata.tableName} WHERE "status" = :status)`,
      )
      .setParameters({
        status: TicketStatusEnum.OPEN,
      })
      .getOne();

    if (result) {
      return result;
    }

    throw new GraphQLError('No more tickets!');
  }

  async searchTickets(
    searchTicketDto: SearchTicketDto,
    pagination: Pagination,
    user: User,
  ): Promise<PaginatedTickets> {
    const [data, totalCount] = await this.ticketRepository.findAndCount({
      where: {
        lockedByUserId: searchTicketDto.lockedByMe ? user.id : undefined,
        status: searchTicketDto.status || undefined,
      },
      order: {
        createdAt: 'ASC',
      },
      skip: pagination.skip || 0,
      take: pagination.take || 20,
    });

    return {
      data: data,
      totalCount,
      skip: pagination.skip,
      take: pagination.take,
    };
  }
}
