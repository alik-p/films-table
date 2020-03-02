import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-icon',
  template: `
    <div class="sort-icon">
      <i class="fas" [ngClass]="classUp"></i>
      <i class="fas" [ngClass]="classDown"></i>
    </div>
  `,
  styles: [
    '.sort-icon {display: flex; flex-direction: column}'
  ]
})
export class SortIconComponent implements OnInit {
  @Input() decrease;

  constructor() {
  }

  get classDown(): string {
    return this.decrease === false ? 'fa-caret-down' : 'fa-angle-down';
  }

  get classUp(): string {
    return this.decrease === true ? 'fa-caret-up' : 'fa-angle-up';
  }

  ngOnInit(): void {
  }

}
