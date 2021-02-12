import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Personal Modules
import { HomePageModule } from './home-page/home-page.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { ErpInfoModule } from './services/erp-info/erp-info.module'
import { ErpInfoComponent } from './services/erp-info/erp-info/erp-info.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    ErpInfoModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'product-erp',
        component: ErpInfoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
