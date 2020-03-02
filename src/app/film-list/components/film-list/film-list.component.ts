import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AppUtils } from '../../../core/app-utils';
import { Film } from '../../../core/api/film.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListComponent implements OnInit {
  @Input() films: Film[];

  constructor() { }

  ngOnInit(): void {
  }


  onGenerate(): void {
    // this.films = AppUtils.generateFilmsData(100);
    // console.log(AppUtils.generateFilmsData(100));
  }


}
