import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilmsService } from './shared/films.service';
import { Observable } from 'rxjs';
import { Film } from '../core/api/models/film.model';



@Component({
  selector: 'app-film-list-container',
  template: `<app-film-list [films]="films$ | async"></app-film-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListContainerComponent implements OnInit {
  films$: Observable<Film[]>;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.films$ = this.filmsService.getAll$();
  }

}
