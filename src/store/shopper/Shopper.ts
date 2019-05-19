import { User } from '../user';
import { Book } from '../book';
import { BookType } from '../book/interfaces';
import Wallet from './Wallet';
import TransactionHistory from './TransactionHistory';

export default class Shopper extends User {
  public wallet: Wallet;
  private _sale: Book[];
  public transactionHistory: TransactionHistory;

  public constructor(name: string, balance: number) {
    super(name);
    this._name = name;
    this.wallet = new Wallet(balance);
    this.transactionHistory = new TransactionHistory();
    this._sale = [];
  }
  public get name(): string {
    return this._name;
  }
  public set addProduct(productType: BookType) {
    if (productType.kind === 'book') {
      this._sale.push(new Book(productType.product));
    }
  }
  public get allProducts(): Book[] {
    return this._sale;
  }
}
