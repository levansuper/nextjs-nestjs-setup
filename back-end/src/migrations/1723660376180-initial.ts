import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1723660376180 implements MigrationInterface {
  name = 'Initial1723660376180';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "ticket" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "comment" text array NOT NULL DEFAULT '{}',
                "title" character varying NOT NULL,
                "description" character varying NOT NULL,
                "status" character varying NOT NULL DEFAULT 'OPEN',
                "lockedByUserId" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id")
            )
        `);

    await queryRunner.query(`
          INSERT INTO public.ticket(
           id, comment, title, description, status, "createdAt", "updatedAt", "lockedByUserId"
          )
          VALUES (
          'a3dfd6b9-d699-47a8-b93f-a8fad491bc81', '{}', 'title1', 'title1 description', 
          'OPEN', '2024-08-12 11:51:30.385906', '2024-08-12 11:53:30.385906', null
          );
      `);
    await queryRunner.query(`
          INSERT INTO public.ticket(
           id, comment, title, description, status, "createdAt", "updatedAt", "lockedByUserId"
          )
          VALUES (
          'a3dfd6b9-d699-47a8-b93f-a8fad491bc82', '{}', 'title2', 'title2 description', 
          'OPEN', '2024-08-12 11:52:30.385906', '2024-08-12 11:53:30.385906', null
          );
      `);
    await queryRunner.query(`
          INSERT INTO public.ticket(
           id, comment, title, description, status, "createdAt", "updatedAt", "lockedByUserId"
          )
          VALUES (
          'a3dfd6b9-d699-47a8-b93f-a8fad491bc83', '{}', 'title3', 'title3 description', 
          'OPEN', '2024-08-12 11:53:30.385906', '2024-08-12 11:53:30.385906', null
          );
      `);
    await queryRunner.query(`
          INSERT INTO public.ticket(
           id, comment, title, description, status, "createdAt", "updatedAt", "lockedByUserId"
          )
          VALUES (
          'a3dfd6b9-d699-47a8-b93f-a8fad491bc84', '{}', 'title4', 'title4 description', 
          'OPEN', '2024-08-12 11:54:30.385906', '2024-08-12 11:53:30.385906', null
          );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "ticket"
        `);
  }
}
