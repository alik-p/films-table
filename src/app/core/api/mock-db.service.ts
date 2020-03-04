import { Injectable } from '@angular/core';
import * as mockData from 'src/assets/films-mock.json';
import { Film } from './models/film.model';
import { Observable, of } from 'rxjs';
import { ApiParams } from './models/params.model';


@Injectable({
  providedIn: 'root'
})
export class MockDbService {

  private readonly films: Film[] = mockData['default']['films'];

  constructor() {
  }

  getAll$(): Observable<Film[]> {
    return of(this.films);
  }


  getFilms$(params?: ApiParams): Observable<Film[]> {
    const filters = params && params.filters;
    const name = filters && filters.name;
    const tags = filters && filters.tags && [filters.tags];
    const year = filters && filters.premiere;
    return of(
      this.filterByTags(
        this.filterByName(
          this.filterByYear(this.films, year),
          name
        ),
        tags
      )
    );
  }


  private filterByName(films: Film[], name: string): Film[] {
    return name
      ? films.filter(film => film.name.toLowerCase().includes(name.toLowerCase()))
      : films;
  }


  private filterByTags(films: Film[], tags: string[]): Film[] {
    return tags
      ? films.filter(film => film.tags.some(tag => tags.includes(tag)))
      : films;
  }

  private filterByYear(films: Film[], year: number): Film[] {
    return year
      ? films.filter(film => new Date(film.premiere).getFullYear() === year)
      : films;

  }


}
