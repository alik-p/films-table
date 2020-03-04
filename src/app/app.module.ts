import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmListModule } from './film-list/film-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FilmListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
