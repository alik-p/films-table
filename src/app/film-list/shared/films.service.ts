import { Injectable } from '@angular/core';
import { Film } from '../../core/api/film.model';
import { FilmsApiService } from '../../core/api/films-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private filmsApiService: FilmsApiService) { }

  getAll$(): Observable<Film[]> {
    return this.filmsApiService.getFilms$();
  }


}
