import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-film-list-page class="app-film-list-page"></app-film-list-page>
    </div>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent { }
