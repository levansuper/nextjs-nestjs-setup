import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { Pagination } from 'src/common/pagination';
import { TicketService } from 'src/modules/ticket/ticket.service';
import {
  AddTicketCommentDto,
  PaginatedTickets,
  SearchTicketDto,
  TicketType,
  UpdateTicketDto,
} from 'src/modules/ticket/ticket.types';
import { AuthUser, User } from 'src/modules/auth/user.decorator';

@Resolver(() => TicketType)
export class TicketResolver {
  constructor(private ticketService: TicketService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => PaginatedTickets)
  async searchTickets(
    @Args('searchTicketDto', { type: () => SearchTicketDto })
    searchTicketDto: SearchTicketDto,
    @Args('pagination', { type: () => Pagination })
    pagination: Pagination,
    @AuthUser() user: User,
  ) {
    const skip = pagination.skip || 0;
    const take = pagination.take || 20;
    const result = await this.ticketService.searchTickets(
      searchTicketDto,
      {
        skip,
        take,
      },
      user,
    );
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => TicketType)
  async ticket(
    @Args('id', { type: () => String })
    id: string,
  ) {
    const result = await this.ticketService.getTicket(id);
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => TicketType)
  async getNextAvailableTicket() {
    const result = await this.ticketService.getNextAvailableTicket();
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => TicketType)
  async updateTicket(
    @Args('updateTicketDto', { type: () => UpdateTicketDto })
    updateTicketDto: UpdateTicketDto,
    @AuthUser() user: User,
  ) {
    const result = await this.ticketService.updateTicket(updateTicketDto, user);
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => TicketType)
  async addTicketComment(
    @Args('addTicketCommentDto', { type: () => AddTicketCommentDto })
    addTicketCommentDto: AddTicketCommentDto,
    @AuthUser() user: User,
  ) {
    const result = await this.ticketService.addTicketComment(
      addTicketCommentDto,
      user,
    );
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => TicketType)
  async lockTicket(
    @Args('id', { type: () => String })
    id: string,
    @AuthUser() user: User,
  ) {
    const result = await this.ticketService.lockTicket(id, user);
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => TicketType)
  async handleTicket(
    @Args('id', { type: () => String })
    id: string,
    @AuthUser() user: User,
  ) {
    const result = await this.ticketService.handleTicket(id, user);
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => TicketType)
  async skipTicket(
    @Args('id', { type: () => String })
    id: string,
    @AuthUser() user: User,
  ) {
    const result = await this.ticketService.skipTicket(id, user);
    return result;
  }
}
