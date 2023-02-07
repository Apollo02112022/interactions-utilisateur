import { Component, Input } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {
  
  adopt = false; 

  myCat: any;

    @Input() datasCatAdoption: Cat [] | undefined;

    show(cat: Cat) {
      this.myCat = cat;
      this.adopt = true; 
    }

    hide() {
      this.myCat = undefined;
      this.adopt = false;
    }

}
