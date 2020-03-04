import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from '../../shared/models/pagination';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  @Input() pagination: Pagination;
  @Output() paginationChange = new EventEmitter<Pagination>();

  pageButtons: number[];


  constructor() {
    this.initPageButtons();
  }

  get pageSizeButtons(): number[] {
    return [5, 10, 25];
  }


  ngOnInit(): void {
  }


  isPageDisabled(page: number): boolean {
    return this.pagination.pageSize * (page - 1) >= this.pagination.total;
  }


  isPageSelected(page: number): boolean {
    return this.pagination.pageNumber === page;
  }

  isSizeSelected(size: number): boolean {
    return this.pagination.pageSize === size;
  }


  onPageNext(): void {
    if (this.pagination.isPageLast()) {
      return;
    }
    const next = ++this.pagination.pageNumber;
    if (this.pageButtons[this.pageButtons.length - 1] < next) {
      this.pageButtons.shift();
      this.pageButtons.push(next);
    }
    this.emitPagination();
  }


  onPagePrev(): void {
    if (this.pagination.isPageFirst()) {
      return;
    }
    const prev = --this.pagination.pageNumber;
    if (this.pageButtons[0] > prev) {
      this.pageButtons.unshift(prev);
      this.pageButtons.pop();
    }
    this.emitPagination();
  }


  onPageSelect(page: number): void {
    if (!this.isPageSelected(page)) {
      this.pagination.pageNumber = page;
      this.emitPagination();
    }
  }


  onSizeSelect(size: number): void {
    if (this.pagination.pageSize !== size) {
      this.pagination.pageNumber = 1;
      this.pagination.pageSize = size;
      this.initPageButtons();
      this.emitPagination();
    }
  }


  private initPageButtons(): void {
    this.pageButtons = [1, 2, 3];
  }


  private emitPagination(): void {
    this.paginationChange.emit(this.pagination);
  }


}
