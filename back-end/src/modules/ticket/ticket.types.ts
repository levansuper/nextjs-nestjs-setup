import {
  Field,
  GraphQLISODateTime,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

export enum TicketStatusEnum {
  OPEN = 'OPEN',
  LOCKED = 'LOCKED',
  DONE = 'DONE',
}

registerEnumType(TicketStatusEnum, {
  name: 'TicketStatusEnum',
});

@InputType('SearchTicketDto')
export class SearchTicketDto {
  @Field(() => TicketStatusEnum, {
    nullable: true,
  })
  status?: TicketStatusEnum;

  @Field({
    nullable: true,
  })
  lockedByMe?: boolean;
}

@InputType('UpdateTicketDto')
export class UpdateTicketDto {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;
}

@InputType('AddTicketCommentDto')
export class AddTicketCommentDto {
  @Field()
  id: string;

  @Field()
  comment: string;
}

@ObjectType('Ticket')
export class TicketType {
  @Field()
  id: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  lockedByUserId: string;

  @Field(() => [String])
  comment: string[];

  @Field(() => TicketStatusEnum)
  status: TicketStatusEnum;
}

@ObjectType('PaginatedTickets')
export class PaginatedTickets {
  @Field(() => [TicketType])
  data: TicketType[];

  @Field(() => Int)
  totalCount: number;

  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;
}
