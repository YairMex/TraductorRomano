import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { RomanInputComponent } from './roman-input/roman-input.component';
import { RomanDisplayComponent } from './roman-display/roman-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RomanInputComponent,
    RomanDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

