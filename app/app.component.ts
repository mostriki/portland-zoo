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
    new Animal('Tilly', 7, 'Female', 'North American River Otter', 'Fish, mollusks, frogs, crayfish, turtles, insects and birds or small mammals.', 'Peekaboo.', 'Loud noises', 'Portland Zoo', 'Veronica Messinger', 2),
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
