export type UrlString = `${'http' | 'https'}://${string}`;

export interface Product {
  id: number;
  imgUrl: UrlString;
  name: string;
  price: number;
}
