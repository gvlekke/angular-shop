import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { NgxsModule } from '@ngxs/store';

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let spectator: Spectator<WishlistComponent>;
  const createComponent = createComponentFactory({
    component: WishlistComponent,
    imports: [NgxsModule.forRoot()],
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
