export default class Wallet {
  private _balance: number;

  public constructor(balance = 0) {
    this._balance = balance;
  }

  public get balance(): number {
    return this._balance;
  }

  public set debit(amount: number) {
    this._balance -= amount;
  }

  public set credit(amount: number) {
    this._balance += amount;
  }
}
