import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { AppRoutingModule } from './app-routing.module';
import { BasicModule } from './basic/basic.module';
import { DbzModule } from './dbz/dbz.module';
import { ListComponent } from './heroes/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DbzModule,
    BrowserModule,
    CounterModule,
    BasicModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
