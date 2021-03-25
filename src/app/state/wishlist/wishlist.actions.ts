import { Product } from 'src/shared/enum/product';

export class AddProduct {
  static readonly type = '[Whislist] Add product';
  constructor(public product: Product) {}
}

export class RemoveProduct {
  static readonly type = '[Whislist] Remove product';
  constructor(public productId: number) {}
}
