import { Component } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

name: string = "";
race: string = "";
date: any; 
link: string = "";

array: object[] = [];

content = this.array;

// valid: boolean = false;

onSubmit(): void {
  console.log(this.name, this.race, this.date, this.link);
}

display() {
  const cat = new Cat(this.name, this.race, this.date, this.link);
  this.array.push(cat);
  console.log(this.array);
}

}
