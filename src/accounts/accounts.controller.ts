import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './account.model';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsSevice: AccountsService) {}

  @Post()
  createAccount(
    @Body('name') name: string,
    @Body('balance') balance: number,
  ): Account {
    return this.accountsSevice.createAccount(name, balance);
  }

  @Get(':id')
  findById(@Param('id') id: number): Account {
    return this.accountsSevice.findById(id);
  }

  @Patch(':id/balance-updade')
  updateAccount(
    @Param('id') id: number,
    @Body('balance') newBalance: number,
  ): Account {
    return this.accountsSevice.updateBalance(id, newBalance);
  }

  @Delete(':id')
  removeAccount(@Param('id', ParseIntPipe) id: number): void {
    return this.accountsSevice.removeAccount(id);
  }
}
