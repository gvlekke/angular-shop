import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/enum/product';
import { AddProduct } from '../../../state/whislist/whislist.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  innerProduct!: Product;
  colorWishListIcon = 'primary';

  @Input()
  set product(value: Product) {
    this.innerProduct = value;

    this.colorWishListIcon = this.innerProduct.inWhislist ? 'warn' : 'primary';
  }

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addProductToWhislist(product: Product): void {
    this.store.dispatch(new AddProduct(product));
  }
}
