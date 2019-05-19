/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Shopper from '../Shopper';
import { BookType } from '../../book/interfaces';

describe('Shopper', () => {
  it('creates Shopper instance', () => {
    const shopper = new Shopper('Prad', 100);
    const productData: BookType = {
      kind: 'book',
      product: { name: 'Test Book', uuid: '702347', price: '1000' }
    };
    expect(shopper.name).toEqual('Prad');
    expect(shopper.wallet.balance).toEqual(100);
    expect(shopper.transactionHistory.history).toEqual([]);

    shopper.addProduct = productData;
    const expectedallProducts = [
      { _name: 'Test Book', _price: '1000', _uuid: '702347' }
    ];
    expect(shopper.allProducts).toEqual(expectedallProducts);
  });
});
