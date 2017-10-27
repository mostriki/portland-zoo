import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>
    <div>
      <label>Enter Animal name:</label>
      <input #newName>
      <label>Enter Animal age:</label>
      <input #newAge>
      <label>Enter Animal sex:</label>
      <input #newSex>
      <label>Enter Animal species:</label>
      <input #newSpecies>
      <label>Enter Animal origin:</label>
      <input #newOrigin>
      <label>Enter Animal diet:</label>
      <input #newDiet>
      <label>Enter Animal likes:</label>
      <input #newLikes>
      <label>Enter Animal dislikes:</label>
      <input #newDislikes>
      <label>Enter Animal caretaker:</label>
      <input #newCaretaker>
      <label>Enter Animal team:</label>
      <input #newTeam>
     <button (click)="submitForm(newName.value, newAge.value, newSex.value, newSpecies.value, newOrigin.value, newDiet.value, newLikes.value, newDislikes.value, newCaretaker.value, newTeam.value); newName.value=''; newAge.value=''; newSex.value=''; newSpecies.value=''; newOrigin.value=''; newDiet.value=''; newLikes.value=''; newDislikes.value=''; newCaretaker.value=''; newTeam.value='';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, age: number, sex: string, species: string, origin: string, diet: string, likes: string, dislikes: string, caretaker: string, team: number) {
    let newAnimalToAdd: Animal = new Animal(name, age, sex, species, origin, diet, likes, dislikes, caretaker, team);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
