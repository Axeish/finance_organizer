import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddValueComponent } from './add-value/add-value.component';
import { RecentTransComponent } from './recent-trans/recent-trans.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { TransactionComponent } from './transaction/transaction.component';


import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AddValueComponent,
    RecentTransComponent,
    FilterComponent,
    HeaderComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
