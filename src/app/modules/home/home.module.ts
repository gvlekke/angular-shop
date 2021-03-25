import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { ProductModule } from '../product/product.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ProductModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [ProductsService],
  exports: [MatCardModule],
})
export class HomeModule {}
