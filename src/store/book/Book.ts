import { BookI } from './interfaces';

export class Book {
  private _name: string;
  private _uuid: string;
  private _price: string;

  public constructor({ name, uuid, price }: BookI) {
    this._name = name;
    this._uuid = uuid;
    this._price = price;
  }

  public get price(): string {
    return this._price;
  }
}
