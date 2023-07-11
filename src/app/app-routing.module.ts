import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/components/counter/counter.component';
import { CountestComponent } from './basic/countest/countest.component';

const routes: Routes = [

    {
      path: 'basic/countest',
      component: CountestComponent
    },
    {
      path: '**',
      redirectTo: 'basic/countest'
    }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
