import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ProductComponent } from './product.component';
import { NgxsModule } from '@ngxs/store';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

describe('ProductComponent', () => {
  let spectator: Spectator<ProductComponent>;
  const createComponent = createComponentFactory({
    component: ProductComponent,
    detectChanges: false,
    imports: [
      MatCardModule,
      MatIconModule,
      MatBadgeModule,
      MatButtonModule,
      NgxsModule.forRoot(),
    ],
  });
  it('should create', () => {
    spectator = createComponent();
    spectator.setInput('product', {
      id: 1,
      imgUrl:
        'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
      category: 'Shirts',
      name: 'CHECK PRINT SHIRT',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nulla ipsum. In hac habitasse platea dictumst. Etiam finibus turpis neque, vitae pulvinar ligula mollis ut. Donec dolor purus, feugiat et odio eget, gravida faucibus nisi',
      price: 110,
    });

    spectator.detectChanges();

    expect(spectator.component).toBeTruthy();
  });
});
