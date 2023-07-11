import { Component } from '@angular/core';

@Component({
  selector: 'app-countest',
  templateUrl: './countest.component.html',
})
export class CountestComponent {

  counter: number= 10

  increaseBy(value: number): void {
    this.counter += value;
  }


}
