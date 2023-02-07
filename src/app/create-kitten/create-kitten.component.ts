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

ok: boolean = false;

onSubmit(): void {
  console.log(this.name, this.race, this.date, this.link);
}

display() {
  if(this.name.length > 0 && this.race.length > 0 && this.date != undefined && this.link.length > 0) {
    const cat = new Cat(this.name, this.race, this.date, this.link);
    this.datasCat?.push(cat);
    console.log(this.datasCat);
    this.ok = true;
    }
  else if (this.name.length === 0 || this.race.length === 0 || this.date === undefined && this.link.length === 0) {
    this.ok = false;
    }
}

}
