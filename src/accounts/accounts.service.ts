import { Injectable } from '@nestjs/common';
import { Account } from './account.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AccountsService {
  private readonly filePath = path.resolve('src/accounts/accounts.json');

  private readAccount(): Account[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Account[];
  }

  private writeAccount(accounts: Account[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
  }

  createAccount(name: string, balance: number): Account {
    const accounts = this.readAccount();
    const newAccount: Account = {
      id: accounts.length > 0 ? accounts[accounts.length - 1].id + 1 : 1,
      name,
      balance,
    };

    accounts.push(newAccount);
    this.writeAccount(accounts);
    return newAccount;
  }

  findById(id: number): Account {
    const accounts = this.readAccount();
    const account = accounts.find((account) => account.id === Number(id));

    if (!account) {
      console.log(`Conta de id ${id} não encontrada!`);
    }

    return account;
  }

  updateBalance(id: number, newBalance: number): Account {
    const accounts = this.readAccount();
    const account = accounts.find((account) => account.id === Number(id));

    account.balance = newBalance;
    this.writeAccount(accounts);

    return account;
  }

  removeAccount(id: number): void {
    const accounts = this.readAccount();
    const accountIndex = accounts.findIndex(
      (account) => account.id === Number(id),
    );

    if (accountIndex !== -1) {
      accounts.splice(accountIndex, 1);
      this.writeAccount(accounts);
    } else {
      console.log(`Conta de id ${id} não encontrada!`);
    }
  }
}
