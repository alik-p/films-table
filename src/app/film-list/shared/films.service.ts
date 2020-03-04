import { Injectable } from '@angular/core';
import { Film } from '../../core/api/models/film.model';
import { FilmsApiService } from '../../core/api/films-api.service';
import { Observable } from 'rxjs';
import { UserOptions } from './models/user-options';

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


}
