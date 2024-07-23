export enum TransactionType {
  DEBIT = 'debit',
  CREDIT = 'credit',
}

export class Transaction {
  constructor(
    public id: number,
    public accountId: number,
    public amount: number,
    public type: TransactionType,
    public data: Date,
  ) {}
}
