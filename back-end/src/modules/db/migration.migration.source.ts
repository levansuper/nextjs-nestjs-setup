import { DataSource, DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { registerAs } from '@nestjs/config';
import { config } from 'dotenv';
config();

const connection: PostgresConnectionOptions = {
  name: 'migration-connection',
  type: 'postgres',
  host: process.env.MIGRATION_DB_HOST,
  port: process.env.MIGRATION_DB_PORT as unknown as number,
  username: process.env.MIGRATION_DB_USERNAME,
  password: process.env.MIGRATION_DB_PASSWORD,
  database: process.env.MIGRATION_DB_DATABASE,
  migrationsTableName: `migrations`,
  entities: ['src/modules/db/entities/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
};

export default registerAs('typeorm', () => connection);
export const connectionSource = new DataSource(connection as DataSourceOptions);
