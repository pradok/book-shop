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
    user: { name: 'Kelly', balance: 10000 }
  };
  let shopperBob: Shopper | void;
  let shopperKelly: Shopper | void;
  beforeEach(() => {
    store = new Store('2nd hand books store');
    shopperBob = store.addUser(userBob);
    shopperKelly = store.addUser(userKelly);
  });

  it('Unsuccessful', () => {
    const buy = store.buyProduct('Kelly', 700, 'CrazyTown', 'Book', 'Bob', 'Shopper');
    // Kelly should have a unsuccessful transaction
    expect(buy).toEqual(false);
  });

  it('Successful Transaction', () => {
    const buy = store.buyProduct('Kelly', 1000, 'CrazyTown', 'Book', 'Bob', 'Shopper');
    const productTrans = {
      _isbn: '977-098-980790',
      _name: 'CrazyTown',
      _price: 1000
    };
    // Kelly should have a successful transaction
    expect(buy).toEqual(true);
    expect(shopperBob instanceof Shopper).toEqual(true);
    expect(shopperKelly instanceof Shopper).toEqual(true);
    if (shopperBob && shopperKelly && buy) {
      // Bob's wallet balance should go up $110
      expect(shopperBob.wallet.balance).toEqual(11000);
      // Kelly's wallet balance should go down to $90
      expect(shopperKelly.wallet.balance).toEqual(9000);
      // Bob has no more products to sell
      expect(shopperBob.allProducts).toEqual([]);
      // Bob should have his sale transaction under sell
      expect(shopperBob.transaction.history).toEqual({ buy: [], sell: [productTrans] });
      // Kelly should have her sale transaction under buy
      expect(shopperKelly.transaction.history).toEqual({ buy: [productTrans], sell: [] });
    }
  });
});
