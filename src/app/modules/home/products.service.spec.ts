import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  SpectatorService,
  createServiceFactory,
  mockProvider,
} from '@ngneat/spectator';
import { of } from 'rxjs';

import { ProductsService } from './products.service';
import { Product } from 'src/shared/enum/product';

const products: Array<Product> = [
  {
    id: 1,
    imgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
    category: 'Shirts',
    name: 'CHECK PRINT SHIRT',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nulla ipsum. In hac habitasse platea dictumst. Etiam finibus turpis neque, vitae pulvinar ligula mollis ut. Donec dolor purus, feugiat et odio eget, gravida faucibus nisi',
    price: 110,
  },
  {
    id: 2,
    imgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    category: 'Sneakers',
    name: 'GLORIA SNEAKER',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nulla ipsum. In hac habitasse platea dictumst. Etiam finibus turpis neque, vitae pulvinar ligula mollis ut. Donec dolor purus, feugiat et odio eget, gravida faucibus nisi',
    price: 91,
  },
  {
    id: 3,
    imgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    category: 'Bags',
    name: 'CATE RIGID BAG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nulla ipsum. In hac habitasse platea dictumst. Etiam finibus turpis neque, vitae pulvinar ligula mollis ut. Donec dolor purus, feugiat et odio eget, gravida faucibus nisi',
    price: 94.5,
  },
];

describe('ProductsService', () => {
  let spectator: SpectatorService<ProductsService>;
  const createService = createServiceFactory({
    service: ProductsService,
    providers: [mockProvider(HttpClient, { get: () => of(products) })],
  });

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
