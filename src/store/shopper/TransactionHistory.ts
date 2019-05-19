interface Transaction {
  uuid: string;
  price: string;
  title: string;
}

export default class TransactionHistory {
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
