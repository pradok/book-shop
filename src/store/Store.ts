import { Shopper } from './shopper';
import { BookType } from './book/interfaces';

export interface ShopperType {
  type: 'shopper';
  user: { name: string; balance: number; products: BookType[] };
}

export default class Store {
  private _name: string;
  private _users: Shopper[];

  public constructor(name: string) {
    this._name = name;
    this._users = [];
  }

  public set addUser(newUser: ShopperType) {
    if (newUser.type === 'shopper') {
      const {
        user: { name, balance, products }
      } = newUser;
      const user = new Shopper(name, balance);
      for (const product of products) {
        user.addProduct = product;
      }
      this._users.push(user);
    }
  }

  public get allUsers(): Shopper[] {
    return this._users;
  }
}
