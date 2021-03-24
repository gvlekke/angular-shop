import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from 'src/shared/enum/product';
import { AddProduct } from '../whislist/whislist.actions';

export interface Whislist {
  products: Array<Product>;
}

@State<Whislist>({
  name: 'whislist',
  defaults: {
    products: [],
  },
})
@Injectable()
export class WhislistState {
  @Selector()
  static products(state: Whislist): Array<Product> {
    return state.products;
  }

  @Action(AddProduct)
  updateAndChangeStatus(ctx: StateContext<Whislist>, action: AddProduct): void {
    const { products } = ctx.getState();
    const { product } = action;

    const productAlreadyAdded = products.find(
      (alreadyAddedProduct) => product.id === alreadyAddedProduct.id
    );
    if (productAlreadyAdded) {
      return;
    }

    ctx.patchState({
      products: [...products, product],
    });
  }
}
