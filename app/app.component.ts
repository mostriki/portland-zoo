import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Animal List</h1>
    </div>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()" (deleteButtonClickedSender)="deleteAnimal()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Tilly', 7, 'Female', 'River Otter', 'North America', 'Fish, mollusks, frogs, crayfish, turtles, insects and sometimes birds or small mammals.', 'Toy buckets, frozen seafood, and playing peekaboo.', 'Loud noises, crowds, and snakes.', 'Veronica Messinger', 2),
    new Animal('Tongass', 14, 'Male', 'Harbor seal', 'North America', 'Fish, shellfish and crustaceans.', 'Rubber balls, belly rubs, and toy horns.', 'Other seals.', 'Ben Rose', 3),
  ];

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  deleteAnimal() {
    let index = this.masterAnimalList.indexOf(this.selectedAnimal);
    this.masterAnimalList.splice(index, 1);
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
