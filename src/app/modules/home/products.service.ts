import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
import { Whislist, WhislistState } from 'src/app/state/whislist/whislist.state';
import { Product } from 'src/shared/enum/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  @Select(WhislistState) whislist$!: Observable<Whislist>;

  constructor(private http: HttpClient) {}

  getProducts$(): Observable<Array<Product>> {
    const getProducts$ = this.http.get<Array<Product>>(
      'http://localhost:4200/assets/products.json'
    );

    return combineLatest([getProducts$, this.whislist$]).pipe(
      map(([products, whislist]) => {
        return products.map((item: Product) => ({
          ...item,
          inWhislist: whislist.products.some(
            (product: Product) => product.id === item.id
          ),
        }));
      })
    );
  }
}
