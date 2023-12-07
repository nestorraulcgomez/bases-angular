import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter : {{ counter }}</p>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter = 10;
  constructor() {}


  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 10;
  }

}
