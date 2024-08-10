import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketEntity } from 'src/modules/db/entities/ticket.entity';
import { DataSourceOptions } from 'typeorm';

const entities = [TicketEntity];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const host = configService.get<string>('DB_HOST');
        const port = configService.get<number>('DB_PORT');
        const username = configService.get<string>('DB_USERNAME');
        const password = configService.get<string>('DB_PASSWORD');
        const database = configService.get<string>('DB_DATABASE');
        const environment = configService.get<string>('STAGE_ENV');
        const ssl = configService.get<string>('DB_SSL');

        const conf: DataSourceOptions = {
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          entities: entities,
          synchronize: environment == 'local',
          migrationsRun: environment != 'local',
          migrationsTableName: `migrations`,
          migrations: ['dist/migrations/**/*.js'],
          ssl: !ssl
            ? undefined
            : {
                rejectUnauthorized: false,
              },
        };

        return conf;
      },
    }),

    TypeOrmModule.forFeature(entities),
  ],
  exports: [TypeOrmModule],
})
export class DBModule {}
