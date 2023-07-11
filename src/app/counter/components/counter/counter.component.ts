import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h3>
        Counter: {{ counter }}
      </h3>
      <button (click)="increaseBy(2)">+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="decreaseBy(2)">-1</button>
  `,
})
export class CounterComponent {

  constructor() { }

  public counter: number = 20;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }

}
