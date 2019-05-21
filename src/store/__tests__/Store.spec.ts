/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Store, { ShopperType } from '../Store';
import { Shopper } from '../shopper';
import { BookType } from '../book/interfaces';

describe('Store', () => {
  let shopperBob: Shopper | void;
  let shopperKelly: Shopper | void;
  const store = new Store('2nd hand books store');
  const product: BookType = {
    kind: 'book',
    product: {
      isbn: '977-098-980790',
      name: 'CrazyTown',
      price: 1000
    }
  };
  const userBob: ShopperType = {
    type: 'shopper',
    user: { name: 'Bob', balance: 10000, products: [product] }
  };
  const userKelly: ShopperType = {
    type: 'shopper',
    user: { name: 'Kelly', balance: 10000, products: [] }
  };
  it('checks instance allUsers()', () => {
    expect(store.allUsers).toEqual([]);
  });
  it('adds User Bob', () => {
    shopperBob = store.addUser(userBob);
    if (shopperBob) {
      expect(shopperBob.name).toEqual('Bob');
      expect(shopperBob.wallet.balance).toEqual(10000);
      expect(shopperBob.allProducts).toEqual([{ _isbn: '977-098-980790', _name: 'CrazyTown', _price: 1000 }]);
    }
  });
  it('adds User Kelly', () => {
    shopperKelly = store.addUser(userKelly);
    if (shopperKelly) {
      expect(shopperKelly.name).toEqual('Kelly');
      expect(shopperKelly.wallet.balance).toEqual(10000);
      expect(shopperKelly.allProducts).toEqual([]);
    }
  });
});

describe('Kelly buys book from Bob', () => {
  let store: Store;
  const product: BookType = {
    kind: 'book',
    product: {
      isbn: '977-098-980790',
      name: 'CrazyTown',
      price: 1000
    }
  };
  const userBob: ShopperType = {
    type: 'shopper',
    user: { name: 'Bob', balance: 10000, products: [product] }
  };
  const userKelly: ShopperType = {
    type: 'shopper',
    user: { name: 'Kelly', balance: 10000, products: [] }
  };
  let shopperBob: Shopper | void;
  let shopperKelly: Shopper | void;
  beforeEach(() => {
    store = new Store('2nd hand books store');
    shopperBob = store.addUser(userBob);
    shopperKelly = store.addUser(userKelly);
  });

  it('Unsuccessful', () => {
    const buy = store.buyProduct('Kelly', 'CrazyTown', 'Book', 'Bob', 'Shopper', 700);
    expect(buy).toEqual(false);
  });

  it('Successful Transaction', () => {
    const buy = store.buyProduct('Kelly', 'CrazyTown', 'Book', 'Bob', 'Shopper', 1000);
    const productTrans = {
      _isbn: '977-098-980790',
      _name: 'CrazyTown',
      _price: 1000
    };
    expect(buy).toEqual(true);
    expect(shopperBob instanceof Shopper).toEqual(true);
    expect(shopperKelly instanceof Shopper).toEqual(true);
    if (shopperBob && shopperKelly && buy) {
      expect(shopperBob.wallet.balance).toEqual(11000);
      expect(shopperKelly.wallet.balance).toEqual(9000);
      expect(shopperBob.allProducts).toEqual([]);
      expect(shopperBob.transactionHistory.history).toEqual({ buy: [], sell: [productTrans] });
      expect(shopperKelly.transactionHistory.history).toEqual({ buy: [productTrans], sell: [] });
    }
  });
});
