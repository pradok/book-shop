export interface TransactionI<T> {
  buy: T[];
  sell: T[];
}
export enum TransactionType {
  buy = 'buy',
  sell = 'sell'
}
export default class TransactionHistory<Transaction> {
  private _history: TransactionI<Transaction>;

  public constructor() {
    this._history = {
      buy: [],
      sell: []
    };
  }
  public get history(): TransactionI<Transaction> {
    return this._history;
  }
  public add(product: Transaction, type: TransactionType): void {
    this._history[type].push(product);
  }
}

module.exports = TransactionHistory;
