import { Injectable } from '@angular/core';
import { Film } from '../../core/api/models/film.model';
import { FilmsApiService } from '../../core/api/films-api.service';
import { Observable, zip } from 'rxjs';
import { UserOptions } from './models/user-options';
import { Lookup } from './models/lookup';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {


  constructor(private filmsApiService: FilmsApiService) {
  }

  getAll$(): Observable<Film[]> {
    return this.filmsApiService.getFilms$();
  }


  getFilms$(options: UserOptions): Observable<Film[]> {
    return this.filmsApiService.getFilms$(options.toApiParams());
  }

  genres$(): Observable<string[]> {
    return this.filmsApiService.getGenres$();
  }


  lookup$(): Observable<Lookup> {
    return zip(
      this.filmsApiService.getGenres$(),
      this.filmsApiService.getYears$()
    ).pipe(
      map(([genres, years]) => ({genres, years}))
    );
  }


}
