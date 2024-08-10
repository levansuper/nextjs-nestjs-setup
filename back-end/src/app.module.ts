import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TicketModule } from 'src/modules/ticket/ticket.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DBModule } from 'src/modules/db/db.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DBModule,
    AuthModule,
    TicketModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      csrfPrevention: false,
      driver: ApolloDriver,
      include: [TicketModule],
      context: ({ req }) => {
        return { req };
      },
      autoSchemaFile: true,
      sortSchema: true,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
    }),
  ],
})
export class AppModule {}
