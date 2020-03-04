import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Film } from './models/film.model';
import { ApiParams } from './models/params.model';
import { MockDbService } from './mock-db.service';
import { ApiResponse } from './models/response.model';
import { map } from 'rxjs/operators';
import { ApiPagination } from './models/pagination.model';



@Injectable({
  providedIn: 'root'
})
export class FilmsApiService extends RestService {

  constructor(private dbService: MockDbService) {
    super();
  }


  getFilms$(params?: ApiParams): Observable<ApiResponse> {
    return this.dbService.getFilms$(params)
      .pipe(
        map((films: Film[]) => this.initResponseData(films, params))
      );
  }


  getGenres$(): Observable<string[]> {
    return this.dbService.getGenres$();
  }


  getYears$(): Observable<number[]> {
    return this.dbService.getYears$();
  }


  private getPage(films: Film[], pagination: ApiPagination): Film[] {
     const begin = pagination.pageNumber - 1;
     const end = begin + pagination.pageSize;
     return (begin  < end) ? films.slice(begin, end) : films;
  }


  private initResponseData(films: Film[], params: ApiParams): ApiResponse {
    const pagination = this.initResponsePagination(films, params);
    const content = this.getPage(films, pagination);
    return {content, pagination};
  }


  private initResponsePagination(films: Film[], params: ApiParams): ApiPagination {
    const {pageNumber = 1, pageSize = films.length} = params;
    const total = films.length;
    return {pageNumber, pageSize, total};
  }




}
