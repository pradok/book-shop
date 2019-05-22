export interface TransactionI<T> {
  buy: T[];
  sell: T[];
}
export enum TransactionType {
  buy = 'buy',
  sell = 'sell'
}
export default class Transaction<T> {
  private _history: TransactionI<T>;

  public constructor() {
    this._history = {
      buy: [],
      sell: []
    };
  }
  public get history(): TransactionI<T> {
    return this._history;
  }
  public add(product: T, type: TransactionType): void {
    this._history[type].push(product);
  }
}
