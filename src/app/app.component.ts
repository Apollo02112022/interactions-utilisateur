import { Component } from '@angular/core';
import { Cat } from './cat';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactions-utilisateur';

  arrayCat: Cat [] = []; 

  arrayCatAdoption: Cat [] = []; 

}
