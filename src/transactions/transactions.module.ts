import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { AccountsService } from 'src/accounts/accounts.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, AccountsService],
})
export class TransactionsModule {}
