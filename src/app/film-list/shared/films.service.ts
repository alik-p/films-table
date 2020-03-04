import { Injectable } from '@angular/core';
import { Film, FilmsApiService } from 'src/app/core/api';
import { BehaviorSubject, Observable, zip } from 'rxjs';
import { UserOptions } from './models/user-options';
import { Lookup } from './models/lookup';
import { map, tap } from 'rxjs/operators';
import { Pagination } from './models/pagination';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  pagination$: Observable<Pagination>;

  private paginationSubj$ = new BehaviorSubject<Pagination>(undefined);

  constructor(private filmsApiService: FilmsApiService) {
    this.pagination$ = this.paginationSubj$.asObservable();
  }


  getFilms$(options: UserOptions): Observable<Film[]> {
    return this.filmsApiService.getFilms$(options.toApiParams())
      .pipe(
        tap(res => this.paginationSubj$.next(Pagination.init(res.pagination))),
        map(res => res.content)
      );
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
