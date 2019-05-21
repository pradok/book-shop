/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Wallet from '../Wallet';

describe('Wallet', () => {
  let wallet: Wallet;
  beforeEach(() => {
    wallet = new Wallet(10000);
  });
  it('balance()', () => {
    expect(wallet.balance).toEqual(10000);
  });
  it('debit()', () => {
    wallet.debit = 1000;
    expect(wallet.balance).toEqual(9000);
  });
  it('credit()', () => {
    wallet.credit = 1000;
    expect(wallet.balance).toEqual(11000);
  });
});
