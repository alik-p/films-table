import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../../../core/api/models/film.model';
import { Filters } from '../../../core/api/models/filters.model';
import { Lookup } from '../../shared/models/lookup';
import { SortDirection, SortField } from '../../shared/models/sort-field';
import { Pagination } from '../../shared/models/pagination';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListComponent implements OnInit {
  @Input() films: Film[];
  @Input() lookup: Lookup;
  @Input() pagination: Pagination;
  @Output() filtersChange = new EventEmitter<Filters>();
  @Output() paginationChange = new EventEmitter<Pagination>();
  @Output() sortChange = new EventEmitter<SortField>();

  constructor() {
  }

  tagClass(tag: string): string {
    const colors = {
      comedy: 'orange',
      drams: 'purple',
      horror: 'black',
      'dark comedy': 'gray',
      western: 'blue',
      history: 'cyan',
      documentary: 'gray',
    };
    return 'tag--' + (colors[tag.toLowerCase()] || 'purple');
  }

  ngOnInit(): void {
  }


  onChangesFilters(filters: Filters): void {
    this.filtersChange.emit(filters);
  }


  onPaginationChange(): void {
    this.paginationChange.emit(this.pagination);
  }


  onSort(direction: SortDirection, field: string): void {
    this.sortChange.emit({direction, field});
  }


}
