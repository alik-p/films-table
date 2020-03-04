import { Filters } from '../../../core/api/models/filters.model';
import { ApiParams } from '../../../core/api/models/params.model';
import { SortField } from './sort-field';
import { Pagination } from './pagination';


export class UserOptions {

  private filters: Filters;
  private pagination: Pagination;
  private sort: Set<string>;

  constructor() {
    this.filters = {name: null, tags: null, premiere: null};
    this.pagination = Pagination.create();
    this.sort = new Set();
  }


  setFilters(filters: Filters) {
    this.filters = {...this.filters, ...filters};
  }


  setPagination(pagination: Pagination): void {
    this.pagination.pageNumber = pagination.pageNumber;
    this.pagination.pageSize = pagination.pageSize;
  }


  setSorting(option: SortField): void {
    this.sort.delete(option.field);
    this.sort.delete(`-${option.field}`);
    if (option.direction !== 0) {
      const prefix: string = option.direction === -1 ? '-' : '';
      this.sort.add(prefix + option.field);
    }
  }


  toApiParams(): ApiParams {
    return {
      ...this.pagination,
      sort: [...this.sort],
      filters: this.filters
    };
  }


}
