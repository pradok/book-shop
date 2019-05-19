export interface BookI {
  name: string;
  uuid: string;
  price: string;
}

export interface BookType {
  kind: 'book';
  product: BookI;
}
