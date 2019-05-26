/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Book from '../Book';
import { BookI } from '../../book/interfaces';

describe('Book', () => {
  it('creates Book instance', () => {
    const data: BookI = { name: 'Test Book', price: 1000, isbn: '978-3-16-13456' };
    const book = new Book(data);
    expect(book.name).toEqual(data.name);
    expect(book.price).toEqual(data.price);
    expect(book.isbn).toEqual(data.isbn);
  });
});
