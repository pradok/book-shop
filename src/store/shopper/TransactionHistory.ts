export default class TransactionHistory<Transaction> {
  private _history: Transaction[];

  public constructor() {
    this._history = [];
  }
  public get history(): Transaction[] {
    return this._history;
  }
  public set add(product: Transaction) {
    this._history.push(product);
  }
}

module.exports = TransactionHistory;
