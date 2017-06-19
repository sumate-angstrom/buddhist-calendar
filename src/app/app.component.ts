import { Component } from '@angular/core';

import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   private myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
        
    };

    // Initialized to specific date (09.10.2018).
  private model: Object = { date: { year: 2018, month: 10, day: 9 } };
}
