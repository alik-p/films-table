import { Injectable } from '@angular/core';
import * as mockData from 'src/assets/films-mock.json';
import { Film } from './models/film.model';
import { Observable, of } from 'rxjs';
import { ApiParams } from './models/params.model';
import { Filter } from './models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class MockDbService {

  private films: Film[] = mockData['default']['films'];

  constructor() {
  }

  getAll$(): Observable<Film[]> {
    return of(this.films);
  }


  getFilms$(params?: ApiParams): Observable<Film[]> {
    return of(this.filtered(params.filters));
  }


  private filtered(filters: Filter[]): Film[] {
    return filters
      ? this.films.filter(film =>
        filters.some(filter =>
          filter.isArray
            ? filter.value.some(val => film[filter.key].includes(val))
            : filter.value == film[filter.key]
        )
      )
      : this.films;
  }


}
