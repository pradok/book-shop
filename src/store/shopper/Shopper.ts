import { User } from '../user';
import { Book } from '../book';
import { Product } from '../product';
import { BookType } from '../book/interfaces';
import Wallet from './Wallet';
import TransactionHistory from './TransactionHistory';

export type ProductType = BookType;
export type SaleProductType = Book[] | Product[];
export type ProductClass = Book | Product;
export default class Shopper extends User {
  public wallet: Wallet;
  private _sale: SaleProductType;
  public transactionHistory: TransactionHistory<ProductClass>;

  public constructor(name: string, balance: number) {
    super(name);
    this._name = name;
    this.wallet = new Wallet(balance);
    this.transactionHistory = new TransactionHistory<ProductClass>();
    this._sale = [];
  }
  public get name(): string {
    return this._name;
  }

  public set addProduct(productType: ProductType) {
    if (productType.kind === 'book') {
      this._sale.push(new Book(productType.product));
    }
  }

  public removeProduct(name: string): ProductClass {
    const productIndex = this._sale.findIndex((product): boolean => product.name === name);
    if (productIndex < 0) {
      throw new Error('Product not available');
    }
    const remove = this._sale.splice(productIndex, 1);
    return remove[0];
  }

  public set addToTransaction(product: ProductClass) {
    this.transactionHistory.add = product;
  }

  public findProduct(name: string, returnIndex?: boolean): Error | ProductClass | number {
    const productIndex = this._sale.findIndex((product): boolean => product.name === name);
    if (productIndex < 0) {
      throw new Error('Product not available');
    }
    return returnIndex ? productIndex : this._sale[productIndex];
  }

  public get allProducts(): SaleProductType {
    return this._sale;
  }
}
