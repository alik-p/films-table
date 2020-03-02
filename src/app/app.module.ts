import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmListContainerComponent } from './film-list/film-list-container.component';
import { FilmListComponent } from './film-list/components/film-list/film-list.component';
import { SortIconComponent } from './film-list/components/film-list/sort-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmListContainerComponent,
    FilmListComponent,
    SortIconComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
