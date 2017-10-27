import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div *ngFor="let currentAnimal of childAnimalList">
      <h2>{{currentAnimal.name}}</h2><br>
      <h4>Age: {{currentAnimal.age}}</h4>
      <h4>Sex: {{currentAnimal.sex}}</h4>
      <h4>Species: {{currentAnimal.species}}</h4>
      <h4>From: {{currentAnimal.location}}</h4>
      <h4>Diet: {{currentAnimal.diet}}</h4>
      <h4>Likes: {{currentAnimal.likes}}</h4>
      <h4>Dislikes: {{currentAnimal.dislikes}}</h4>
      <br>
      <h4>Primary Caretaker: {{currentAnimal.caretaker}}</h4>
      <h4>Vetrinarian: {{currentAnimal.vetrinarian}}</h4>
      <h4>Team Members: {{currentAnimal.team}}</h4>
      <br>
      <h3><button class="btn btn-warning">Edit</button></h3><br>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  // @Output() clickSender = new EventEmitter();

  // editButtonHasBeenClicked(brewToEdit: Brew) {
  //   this.clickSender.emit(brewToEdit);
  // }
  //
  // pourPint(brewToEdit: Brew) {
  //   brewToEdit.pints -= 1;
  // }
  //
  // pourGrowler(brewToEdit: Brew) {
  //   brewToEdit.pints -= 2;
  // }
  //
  // priorityColor(currentBrew){
  //   if (currentBrew.abv <= 3){
  //     return "text-info";
  //   } else if (currentBrew.abv > 3 && currentBrew.abv <= 7) {
  //     return  "text-warning";
  //   } else {
  //     return "text-danger";
  //   }
  // }
  //
  // progressBarColor(currentBrew){
  //   console.log("OnTest" + currentBrew.pints)
  //   if (currentBrew.pints <= 10){
  //     console.log("1: " + currentBrew.pints);
  //     return "progress-bar bg-danger";
  //   } else if (currentBrew.pints > 10 && currentBrew.pints <= 62) {
  //     console.log("2: " + currentBrew.pints);
  //     return  "progress-bar bg-warning";
  //   } else if (currentBrew.pints > 62) {
  //     console.log("3: " + currentBrew.pints);
  //     return "progress-bar bg-success";
  //   }
  // }
  //
  // progressBarPercent(currentBrew){
  //   return `${currentBrew.pints/124 * 100}%`;
  // }
  //
  // onChange(optionFromMenu) {
  //   this.filterByLevel = optionFromMenu;
  // }
  //
  // filterByLevel: string = "fullKegs";
}
