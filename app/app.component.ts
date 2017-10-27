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
    new Animal('Tilly', 7, 'Female', 'River Otter', 'North America', 'Fish, mollusks, frogs, crayfish, turtles, insects and sometimes birds or small mammals.', 'Toy buckets, frozen seafood, and playing peekaboo.', 'Loud noises, crowds, and snakes.', 'Veronica Messinger', 'Dr. Stich, DVM', 2),
    new Animal('Tongass', 14, 'Male', 'Harbor seal', 'North America', 'Fish, shellfish and crustaceans.', 'Rubber balls, belly rubs, and toy horns.', 'Other seals.', 'Ben Rose', 'Dr. Jimenez, DVM', 3),
    new Animal('Woody', 1, 'Male', 'Wood duck', 'North America', 'Seeds, aquatic and terrestrial invertebrates.', 'Multigrain bread and lots of sleep.', 'Hawks.', 'Noah Berry', 'Dr. Stich, DVM', 1),
  ];

  // editBrew(clickedBrew) {
  //   this.selectedBrew = clickedBrew;
  // }
  //
  // finishedEditing() {
  //   this.selectedBrew = null;
  // }
  //
  // addBrew(newBrewFromChild: Brew) {
  //   this.masterBrewList.push(newBrewFromChild);
  // }
  //
  // deleteBrew() {
  //   let index = this.masterBrewList.indexOf(this.selectedBrew);
  //   this.masterBrewList.splice(index, 1);
  // }
  //
  // refillKeg() {
  //   let index = this.masterBrewList.indexOf(this.selectedBrew);
  //   this.masterBrewList[index].pints = 124;
  // }
}
