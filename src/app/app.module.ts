import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { CalendarComponent } from "./calendar/calendar.component";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
