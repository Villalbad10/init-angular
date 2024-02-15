import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 45000
    },
    {
      id: uuid(),
      name: 'Veggeta',
      power: 3000,
    },
    {
      id: uuid(),
      name: 'Crillin',
      power: 6000,
    }
  ];

  addCharacter(character: Character): void {
    console.log('Main', character);
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(id: number): void {
  //   this.characters.splice(id, 1)
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(item => item.id !== id);
  }
}
