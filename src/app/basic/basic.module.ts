import { Exports } from './../../../node_modules/cjs-module-lexer/lexer.d';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountestComponent } from './countest/countest.component';



@NgModule({
  declarations: [
    CountestComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CountestComponent,
  ]
})
export class BasicModule { }
