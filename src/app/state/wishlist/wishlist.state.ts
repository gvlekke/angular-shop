import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  patch,
  append,
  removeItem,
  insertItem,
  updateItem,
} from '@ngxs/store/operators';

import { Product } from 'src/shared/enum/product';
import { AddProduct, RemoveProduct } from './wishlist.actions';

export interface Whislist {
  products: Array<Product>;
}

@State<Whislist>({
  name: 'wishlist',
  defaults: {
    products: [],
  },
})
@Injectable()
export class WishlistState {
  @Selector()
  static products(state: Whislist): Array<Product> {
    return state.products;
  }

  @Selector()
  static amountOfProducts(state: Whislist): number {
    return state.products.reduce(
      (prev, curr) => prev + curr.amountInWishlist,
      0
    );
  }

  @Action(AddProduct)
  addProduct(ctx: StateContext<Whislist>, action: AddProduct): void {
    const { products } = ctx.getState();
    const { product } = action;

    const newProducts = [...products];
    const foundProduct = newProducts.find(
      (alreadyAddedProduct) => product.id === alreadyAddedProduct.id
    );

    if (foundProduct) {
      const wishlistProduct = { ...foundProduct };
      wishlistProduct.amountInWishlist = wishlistProduct.amountInWishlist + 1;
      ctx.setState(
        patch({
          products: updateItem<Product>(
            (updateItemProduct) => updateItemProduct.id === product.id,
            wishlistProduct
          ),
        })
      );
    } else {
      ctx.patchState({
        products: [
          ...newProducts,
          {
            ...product,
            amountInWishlist: 1,
          },
        ],
      });
    }
  }

  @Action(RemoveProduct)
  removeProduct(ctx: StateContext<Whislist>, action: RemoveProduct): void {
    const { products } = ctx.getState();
    const { productId } = action;

    const newProducts = [...products];
    const wishlistProductIndex = newProducts.findIndex(
      (alreadyAddedProduct) => productId === alreadyAddedProduct.id
    );

    if (wishlistProductIndex >= 0) {
      const wishlistProduct = { ...newProducts[wishlistProductIndex] };
      if (wishlistProduct.amountInWishlist > 1) {
        wishlistProduct.amountInWishlist = wishlistProduct.amountInWishlist - 1;
        ctx.setState(
          patch({
            products: updateItem<Product>(
              (updateItemProduct) =>
                updateItemProduct.id === wishlistProduct.id,
              wishlistProduct
            ),
          })
        );
      } else {
        newProducts.splice(wishlistProductIndex, 1);
        ctx.patchState({
          products: newProducts,
        });
      }
    }
  }

  private removeOneOrDeleteFromWhislist(
    productId: number,
    products: Array<Product>
  ): Array<Product> {
    const newProducts = [...products];
    const productIndex = newProducts.findIndex(
      (alreadyAddedProduct) => productId === alreadyAddedProduct.id
    );

    if (productIndex >= 0) {
      const product = newProducts[productIndex];

      if (product.amountInWishlist < 2) {
        newProducts.splice(productIndex, 1);
      } else {
        product.amountInWishlist = product.amountInWishlist--;
      }
    }

    return newProducts;
  }
}
