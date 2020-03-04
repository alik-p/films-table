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


  getGenres$(): Observable<string[]> {
    const genres = new Set<string>();
    this.films.forEach(film => film.tags.forEach(tag => genres.add(tag)));
    return of([...genres]);
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


  getYears$(): Observable<number[]> {
    return of(
      this.films
        .map(film => new Date(film.premiere).getFullYear())
        .filter((year, index, self) => self.indexOf(year) === index)
        .sort((a, b) => a - b)
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
