import { Component, Input } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  @Input() datasCat: Cat [] | undefined;
  @Input() datasCatAdoption: Cat [] | undefined;

  adopt(cat: Cat, index: number) {
    this.datasCatAdoption?.push(cat);
    this.datasCat?.splice(index, 1);
    console.log(cat, index);
  }

}
