import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Component Contador : {{counter}}</h3>
<button (click)="incrementar(1)">Sumar +1</button>
<button (click)="incrementar(-1)">Restar -1</button>

<button (click)="reset()"> Restablecer</button>
  
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 3;

  incrementar(value: number): void {
    this.counter += value;
  }


  reset(): void {
    this.counter = 3;
  }
}