import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Film } from './models/film.model';
import { ApiParams } from './models/params.model';
import { MockDbService } from './mock-db.service';

enum apiUrls {
  films = '/films'
}


@Injectable({
  providedIn: 'root'
})
export class FilmsApiService extends RestService {

  constructor(private dbService: MockDbService) {
    super();
  }


  getFilms$(params?: ApiParams): Observable<Film[]> {
    // return super.get<Film[]>(apiUrls.films);
    return this.dbService.getFilms$(params);
  }


  getGenres$(): Observable<string[]> {
    return this.dbService.getGenres$();
  }

  getYears$(): Observable<number[]> {
    return this.dbService.getYears$();
  }


}
