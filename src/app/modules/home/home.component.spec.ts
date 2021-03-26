import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator';

import { HomeComponent } from './home.component';
import { ProductModule } from '../product/product.module';
import { ProductsService } from './products.service';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports: [ProductModule],
    providers: [mockProvider(ProductsService)],
  });
  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
