import { TicketStatusEnum } from '../../ticket/ticket.types';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ticket')
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    default: [],
    array: true,
  })
  comment: string[];

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    default: TicketStatusEnum.OPEN,
  })
  status: TicketStatusEnum;

  @Column({
    nullable: true,
  })
  lockedByUserId: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
