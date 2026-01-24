import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Formlar için gerekli

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Routing modülünü buradan kaldırdık
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }