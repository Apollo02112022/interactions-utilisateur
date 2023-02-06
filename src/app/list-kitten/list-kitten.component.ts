import { Component, Input } from '@angular/core';
import { race } from 'rxjs';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  @Input() datas: any = []; 

  test: string = "Coucou!";

  adopt() {
    console.log(this.test);
  }

}
