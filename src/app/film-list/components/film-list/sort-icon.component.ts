import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SortDirection } from '../../shared/models/sort-field';


@Component({
  selector: 'app-sort-icon',
  template: `
    <div class="sort-icon">
      <i class="fas" [ngClass]="classUp" (click)="onUp()"></i>
      <i class="fas" [ngClass]="classDown" (click)="onDown()"></i>
    </div>
  `,
  styles: [
    '.sort-icon {display: flex; flex-direction: column; cursor: pointer;}',
  ]
})
export class SortIconComponent implements OnInit {
  @Output() sortChange = new EventEmitter<SortDirection>();

  private decrease: boolean;

  constructor() { }

  get classDown(): string {
    return this.decrease === false ? 'fa-caret-down' : 'fa-angle-down';
  }

  get classUp(): string {
    return this.decrease === true ? 'fa-caret-up' : 'fa-angle-up';
  }


  ngOnInit(): void { }


  onUp(): void {
    this.toggleDecrease(true);
  }


  onDown(): void {
    this.toggleDecrease(false);
  }


  private toggleDecrease(flag: boolean) {
    if (this.decrease === flag) {
      this.decrease = null;
      this.sortChange.emit(0);
    } else {
      this.decrease = flag;
      this.sortChange.emit(flag ? -1 : 1);
    }
  }

}
