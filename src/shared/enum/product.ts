export type UrlString = `${'http' | 'https'}://${string}`;

export interface Product {
  id: number;
  imgUrl: UrlString;
  category: string;
  name: string;
  description: string;
  price: number;
  inWhislist?: boolean;
}
