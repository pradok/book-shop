/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Shopper, { ProductClass } from '../Shopper';
import { BookType } from '../../book/interfaces';
export enum TransactionType {
  buy = 'buy',
  sell = 'sell'
}

describe('Shopper', () => {
  describe('instance', () => {
    const shopper = new Shopper('Prad', 10000);
    const productData: BookType = {
      kind: 'book',
      product: { name: 'Test Book', price: 1000, isbn: '978-3-16-13456' }
    };
    const productData2: BookType = {
      kind: 'book',
      product: { name: 'Crazy Town', price: 1000, isbn: '9784-9-16-13456' }
    };
    const expectedAllProducts = [
      { _name: 'Test Book', _price: 1000, _isbn: '978-3-16-13456' },
      { _name: 'Crazy Town', _price: 1000, _isbn: '9784-9-16-13456' }
    ];
    shopper.addProduct = productData;
    shopper.addProduct = productData2;

    it('creates default properties with added products', () => {
      expect(shopper.name).toEqual('Prad');
      expect(shopper.wallet.balance).toEqual(10000);
      expect(shopper.transaction.history).toEqual({ buy: [], sell: [] });
      expect(shopper.allProducts).toEqual(expectedAllProducts);
    });

    it('findProduct()', () => {
      const findProduct = shopper.findProduct('Test Book');
      const expected = { _name: 'Test Book', _price: 1000, _isbn: '978-3-16-13456' };
      expect(findProduct).toEqual(expected);
    });
    it('removeProduct(), addToTransaction()', () => {
      const remove: ProductClass = shopper.removeProduct('Test Book');
      const expected = { _name: 'Test Book', _price: 1000, _isbn: '978-3-16-13456' };
      expect(remove).toEqual(expected);
      shopper.addToTransaction(remove, TransactionType.buy);
      const expectedTransactionHistory = { buy: [expected], sell: [] };
      expect(shopper.transaction.history).toEqual(expectedTransactionHistory);
    });
  });
});
