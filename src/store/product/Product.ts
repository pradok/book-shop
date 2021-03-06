import { Product as ProductI } from './interfaces';

export default class Product {
  private _name: string;
  private _price: number;

  public constructor({ name, price }: ProductI) {
    this._name = name;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price;
  }
}
