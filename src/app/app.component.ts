import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Schäden Mobile';
  selectedValue='';
  selectedValueproblemstatus='';
  selectedBegehung='';
  anlagen: Food[] = [
    {value: 'steak-0', viewValue: 'Rollbahn'},
    {value: 'pizza-1', viewValue: 'Vorfeld'},
    {value: 'tacos-2', viewValue: 'Rollwege'}
  ];
  begehungen: Food[] = [
    {value: 'steak-0', viewValue: 'A'},
    {value: 'pizza-1', viewValue: 'B'},
    {value: 'tacos-2', viewValue: 'C'}
  ];
  problemstatusWerte: Food[] = [
    {value: 'steak-0', viewValue: 'Aktiv'},
    {value: 'pizza-1', viewValue: 'Gelöst - Provisorisch'},
    {value: 'tacos-2', viewValue: 'Geschlossen - Endgültig'}
  ];
  stateCtrl = new FormControl();
  picker = new MatDatepickerModule();
}
