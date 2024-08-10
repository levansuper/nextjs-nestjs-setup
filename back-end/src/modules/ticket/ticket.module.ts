import { Module } from '@nestjs/common';
import { TicketResolver } from './ticket.resolver';
import { TicketService } from './ticket.service';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DBModule } from 'src/modules/db/db.module';

@Module({
  imports: [AuthModule, DBModule],
  providers: [TicketResolver, TicketService],
})
export class TicketModule {}
