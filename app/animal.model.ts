export class Animal {
  public done: boolean = false;
  constructor(public name: string,
              public age: number,
              public sex: string,
              public species: string,
              public origin: string,
              public diet: string,
              public likes: string,
              public dislikes: string,
              public caretaker: string,
              public team: number) { }
}
