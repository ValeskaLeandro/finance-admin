import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction, TransactionType } from './transaction.model';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  createTransaction(
    @Body('accountId') accountId: number,
    @Body('amount') amount: number,
    @Body('type') type: TransactionType,
  ): Transaction {
    return this.transactionsService.createTransaction(accountId, amount, type);
  }

  @Get()
  findAll(): Transaction[] {
    return this.transactionsService.findAll();
  }

  @Put(':id')
  updateTransaction(
    @Param('id', ParseIntPipe) id: number,
    @Body('amount') amount: number,
    @Body('type') type: TransactionType,
  ): Transaction {
    return this.transactionsService.updateTransaction(id, amount, type);
  }
}
