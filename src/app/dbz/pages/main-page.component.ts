import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 45000
    },
    {
      name: 'Veggeta',
      power: 3000,
    },
    {
      name: 'Crillin',
      power: 6000,
    }
  ];

  onNewCharacter(character: Character): void {
    console.log('Main', character);

    this.characters.push(character);

  }

  onDeleteCharacter(id: number): void {
    this.characters.splice(id, 1)

  }

}