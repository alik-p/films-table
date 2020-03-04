import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilmsService } from './shared/films.service';
import { Observable } from 'rxjs';
import { Film } from '../core/api/models/film.model';
import { UserOptions } from './shared/models/user-options';
import { Filters } from '../core/api/models/filters.model';
import { Lookup } from './shared/models/lookup';
import { SortField } from './shared/models/sort-field';


@Component({
  selector: 'app-film-list-container',
  template: `
    <app-film-list
      [films]="films$ | async"
      [lookup]="lookup$ | async"
      (filtersChange)="onFiltersChange($event)"
      (sortChange)="onSortChange($event)">
    </app-film-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListContainerComponent implements OnInit {
  films$: Observable<Film[]>;
  lookup$: Observable<Lookup>;

  options: UserOptions;

  constructor(private filmsService: FilmsService) {
    this.options = new UserOptions();
  }


  ngOnInit(): void {
    this.films$ = this.filmsService.getAll$();
    this.lookup$ = this.filmsService.lookup$();
  }


  onFiltersChange(filters: Filters): void {
    this.options.setFilters(filters);
    this.loadFilms$();
  }

  onSortChange(option: SortField): void {
    console.log('onSortChange: ', option);
    this.options.setSorting(option);
    this.loadFilms$();
  }


  private loadFilms$(): void {
    this.films$ = this.filmsService.getFilms$(this.options);
  }


}
