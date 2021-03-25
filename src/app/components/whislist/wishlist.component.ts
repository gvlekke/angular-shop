import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { WishlistState } from 'src/app/state/wishlist/wishlist.state';
import { Product } from 'src/shared/enum/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass'],
})
export class WishlistComponent implements OnInit {
  @Select(WishlistState.products) wishlistItems$!: Observable<Array<Product>>;

  constructor() {}

  ngOnInit(): void {}

  trackById(_: number, product: Product): number {
    return product.id;
  }
}
