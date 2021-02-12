import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page/home-page.component'

const routes: Routes = [
  // { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  // {
  //   path: 'home-page',
  //   // component: HomePageComponent
  //   // component: HomePageComponent,
  //   loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
