import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young (0-2)</option>
      <option value="matureAnimals">Mature (2+)</option>
    </select>

    <div *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
      <h2>{{currentAnimal.name}}</h2><br>
      <h4>Age: {{currentAnimal.age}}</h4>
      <h4>Sex: {{currentAnimal.sex}}</h4>
      <h4>Species: {{currentAnimal.species}}</h4>
      <h4>Diet: {{currentAnimal.diet}}</h4>
      <h4>Likes: {{currentAnimal.likes}}</h4>
      <h4>Dislikes: {{currentAnimal.dislikes}}</h4>
      <h4>Zoo: {{currentAnimal.location}}</h4>
      <h4>Primary Caretaker: {{currentAnimal.caretaker}}</h4>
      <h4>Team Members: {{currentAnimal.team}}</h4>
      <br>
      <h3><button class="btn btn-secondary" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></h3><br>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  filterByAge: string = "allAnimals";
}
