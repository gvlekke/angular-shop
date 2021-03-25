import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let spectator: Spectator<WishlistComponent>;
  const createComponent = createComponentFactory(WishlistComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
