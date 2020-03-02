import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Film } from './film.model';
import { ApiParams } from './api-params';

enum apiUrls {
  films = '/films'
}


@Injectable({
  providedIn: 'root'
})
export class FilmsApiService extends RestService {

  constructor() {
    super();
  }


  getFilms$(params?: ApiParams): Observable<Film[]> {
    return super.get<Film[]>(apiUrls.films);
  }


}
