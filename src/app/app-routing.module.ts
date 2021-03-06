import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum RoutesEnum {
  HOME = '',
}

const routes: Routes = [
  {
    path: RoutesEnum.HOME,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
