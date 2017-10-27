import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3>{{childSelectedAnimal.name}}</h3>
        <h3>Edit Animal</h3>
        <label>Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name">
        <label>Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age">
        <label>Sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex">
        <label>Species:</label>
        <input [(ngModel)]="childSelectedAnimal.species">
        <label>Origin:</label>
        <input [(ngModel)]="childSelectedAnimal.origin">
        <label>Diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet">
        <label>Likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes">
        <label>Disikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes">
        <label>Caretaker:</label>
        <input [(ngModel)]="childSelectedAnimal.caretaker">
        <label>Team:</label>
        <input [(ngModel)]="childSelectedAnimal.team">
        <button class="btn btn-secondary" (click)="doneButtonClicked()">Submit</button>
        <button class="btn btn-secondary" (click)="deleteButtonClicked()">Delete</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() deleteButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  deleteButtonClicked() {
    this.deleteButtonClickedSender.emit();
  }
}
