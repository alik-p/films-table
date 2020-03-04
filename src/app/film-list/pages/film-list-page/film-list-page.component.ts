import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilmsService } from '../../shared/films.service';
import { Observable } from 'rxjs';
import { Film, Filters } from 'src/app/core/api';
import { UserOptions } from '../../shared/models/user-options';
import { Lookup } from '../../shared/models/lookup';
import { SortField } from '../../shared/models/sort-field';
import { Pagination } from '../../shared/models/pagination';


@Component({
  selector: 'app-film-list-page',
  templateUrl: './film-list-page.component.html',
  styleUrls: ['./film-list-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListPageComponent implements OnInit {
  films$: Observable<Film[]>;
  lookup$: Observable<Lookup>;
  pagination$: Observable<Pagination>;

  options: UserOptions;

  constructor(private filmsService: FilmsService) {
    this.options = new UserOptions();
  }


  ngOnInit(): void {
    this.lookup$ = this.filmsService.lookup$();
    this.pagination$ = this.filmsService.pagination$;
    this.loadFilms$();
  }


  onChangesFilters(filters: Filters): void {
    this.options.setFilters(filters);
    this.loadFilms$();
  }


  onChangesPagination(pagination: Pagination): void {
    this.options.setPagination(pagination);
    this.loadFilms$();
  }


  onSortChange(option: SortField): void {
    this.options.setSorting(option);
    this.loadFilms$();
  }


  private loadFilms$(): void {
    this.films$ = this.filmsService.getFilms$(this.options);
  }


}
