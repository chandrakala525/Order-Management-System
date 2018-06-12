import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DisplayBodyComponent } from './components/display-body/display-body.component';
import { SingleOrderComponent } from './components/single-order/single-order.component';
import { MultipleOrderComponent } from './components/multiple-order/multiple-order.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FormPageComponent } from './components/form-page/form-page.component';

const routes: Routes = [
  { path: 'single-order-details', component: SingleOrderComponent, data: {name: 'page1'} },
  { path: 'multiple-order-details', component: MultipleOrderComponent, data: {name: 'page2'} },
  { path: 'reports', component: ReportsComponent, data: {name: 'page3'} },
  { path: 'form', component: FormPageComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule 
  ],
  declarations: []
})
export class AppRoutingModule { }
