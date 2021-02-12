import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErpInfoComponent } from './erp-info/erp-info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ErpInfoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ErpInfoComponent
  ]
})
export class ErpInfoModule { }
