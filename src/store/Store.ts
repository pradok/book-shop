import { Shopper } from './shopper';
import { BookType } from './book/interfaces';
import { Product } from './product';
enum TransactionType {
  buy = 'buy',
  sell = 'sell'
}

export interface ShopperType {
  type: 'shopper';
  user: { name: string; balance: number; products?: BookType[] };
}

export default class Store {
  private _name: string;
  private _users: Shopper[];

  public constructor(name: string) {
    this._name = name;
    this._users = [];
  }

  public addUser(newUser: ShopperType): Shopper | void {
    if (newUser.type === 'shopper') {
      const {
        user: { name, balance, products }
      } = newUser;
      const user = new Shopper(name, balance);
      if (products && products.length) {
        for (const product of products) {
          user.addProduct = product;
        }
      }
      this._users.push(user);
      return user;
    }
  }

  public findShopper(name: string, userType: string): Shopper {
    const shopper = this._users.find((user): boolean => user.constructor.name === userType && user.name === name);
    if (!shopper) {
      throw Error('noShopperFound');
    }
    return shopper;
  }

  public buyProduct(
    buyerName: string,
    buyerPrice: number,
    productName: string,
    productType: string,
    sellerName: string,
    sellerType: string
  ): boolean {
    const shopperSeller = this.findShopper(sellerName, sellerType);
    const shopperBuyer = this.findShopper(buyerName, sellerType);
    if (shopperSeller && shopperBuyer) {
      const product: Product | number = shopperSeller.findProduct(productName);
      if (product && typeof product !== 'number' && product.constructor.name === productType) {
        if (product.price === buyerPrice) {
          shopperSeller.removeProduct(product.name);
          shopperSeller.addToTransaction(product, TransactionType.sell);
          shopperSeller.wallet.credit = buyerPrice;
          shopperBuyer.addToTransaction(product, TransactionType.buy);
          shopperBuyer.wallet.debit = buyerPrice;
          return true;
        }
      }
    }
    return false;
  }

  public get allUsers(): Shopper[] {
    return this._users;
  }
}
