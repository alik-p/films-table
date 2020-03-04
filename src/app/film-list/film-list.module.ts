import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmListComponent } from './components/film-list/film-list.component';
import { SortIconComponent } from './components/film-list/sort-icon.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FiltersToolbarComponent } from './components/filters-toolbar/filters-toolbar.component';
import { FilmListPageComponent } from './pages/film-list-page/film-list-page.component';


@NgModule({
  declarations: [
    FilmListPageComponent,
    FilmListComponent,
    SortIconComponent,
    PaginationComponent,
    FiltersToolbarComponent,
    FilmListPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FilmListPageComponent,
  ]
})
export class FilmListModule { }
