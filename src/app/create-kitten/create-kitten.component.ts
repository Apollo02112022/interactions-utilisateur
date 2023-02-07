import { Component, Input } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

@Input() datasCat: Cat [] | undefined;

name: string = "";
race: string = "";
date: any; 
link: string = "";

onSubmit(): void {
  console.log(this.name, this.race, this.date, this.link);
}

display() {
  const cat = new Cat(this.name, this.race, this.date, this.link);
  this.datasCat?.push(cat);
  console.log(this.datasCat);
}

}
