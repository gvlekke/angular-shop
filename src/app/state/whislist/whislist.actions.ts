import { Product } from 'src/shared/enum/product';

export class AddProduct {
  static readonly type = '[Whislist] Add product';
  constructor(public product: Product) {}
}
