import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { WishlistState } from 'src/app/state/wishlist/wishlist.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'divotion';

  @Select(WishlistState.amountOfProducts) whislistTotal$!: Observable<number>;
}
