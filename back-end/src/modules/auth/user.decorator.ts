import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export type User = {
  id: string;
};

export const AuthUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;
    return {
      id: user.sub,
    };
  },
);
