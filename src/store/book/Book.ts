import { BookI } from './interfaces';
import { Product } from '../product';

export default class Book extends Product {
  private _isbn: string;

  public constructor({ name, price, isbn }: BookI) {
    super({ name, price });
    this._isbn = isbn;
  }

  public get isbn(): string {
    return this._isbn;
  }
}
