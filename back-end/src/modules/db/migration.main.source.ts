import { DataSource, DataSourceOptions } from 'typeorm';
import { registerAs } from '@nestjs/config';
import { config } from 'dotenv';
config();

const connection: DataSourceOptions = {
  name: 'main-connection',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrationsTableName: `migrations`,
  synchronize: false,
  dropSchema: true,
  entities: ['src/modules/db/entities/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
};
export default registerAs('typeorm', () => connection);
export const connectionSource = new DataSource(connection as DataSourceOptions);
