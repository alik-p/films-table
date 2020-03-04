import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../../../core/api/models/film.model';
import { Lookup } from '../../shared/models/lookup';
import { SortDirection, SortField } from '../../shared/models/sort-field';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListComponent implements OnInit {
  @Input() films: Film[];
  @Input() lookup: Lookup;
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


  onSort(direction: SortDirection, field: string): void {
    this.sortChange.emit({direction, field});
  }


}
