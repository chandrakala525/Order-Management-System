import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayBodyComponent } from './components/display-body/display-body.component';
import { AppRoutingModule } from './/app-routing.module';
import { SingleOrderComponent } from './components/single-order/single-order.component';
import { MultipleOrderComponent } from './components/multiple-order/multiple-order.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FormPageComponent } from './components/form-page/form-page.component';


@NgModule({
  declarations: [
    AppComponent,

    LeftMenuComponent,
    HeaderComponent,
    DisplayBodyComponent,
    SingleOrderComponent,
    MultipleOrderComponent,
    ReportsComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    DataTablesModule,

    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
