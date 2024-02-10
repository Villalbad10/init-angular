import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames: string[] = ['Spriderman', 'Iroman', 'Hulk', 'Batman'];
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroeNames.pop();
  }
}
