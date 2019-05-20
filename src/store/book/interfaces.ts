import { Product } from '../product/interfaces';

export interface BookI extends Product {
  isbn: string;
}

export interface BookType {
  kind: 'book';
  product: BookI;
}
