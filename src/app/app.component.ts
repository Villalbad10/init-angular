import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string = 'App base';
  public counter: number = 3;

  incrementar(value: number): void {
    this.counter += value;
  }

  // decrementar(value:number): void {
  //   this.counter -= value;
  // }

  reset(): void {
    this.counter = 3;
  }
}
