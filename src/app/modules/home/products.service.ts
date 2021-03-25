import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WishlistState } from 'src/app/state/wishlist/wishlist.state';
import { Product } from 'src/shared/enum/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  @Select(WishlistState.products) whislistProducts$!: Observable<
    Array<Product>
  >;

  constructor(private http: HttpClient) {}

  getProducts$(): Observable<Array<Product>> {
    const getProducts$ = this.http.get<Array<Product>>(
      'http://localhost:4200/assets/products.json'
    );

    return combineLatest([getProducts$, this.whislistProducts$]).pipe(
      map(([products, whislistProducts]) => {
        return products.map((item: Product) => ({
          ...item,
          amountInWishlist: this.findAmountInWishlist(item, whislistProducts),
        }));
      })
    );
  }

  private findAmountInWishlist(
    product: Product,
    wishlistProducts: Array<Product>
  ): number {
    const whislistProduct = wishlistProducts.find(
      (whishlistProduct: Product) => product.id === whishlistProduct.id
    );
    return whislistProduct?.amountInWishlist ?? 0;
  }
}
