import { Type } from '@nestjs/common';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('Pagination')
export class Pagination {
  @Field()
  skip?: number;

  @Field()
  take?: number;
}