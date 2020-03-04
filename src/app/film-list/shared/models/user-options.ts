import { ApiPagination } from '../../../core/api/models/pagination.model';
import { Filters } from '../../../core/api/models/filters.model';
import { ApiParams } from '../../../core/api/models/params.model';
import { SortField } from './sort-field';

export class UserOptions {

  private filters: Filters;
  private pagination: ApiPagination;
  private sort: Set<string>;

  constructor() {
    // Defaults:
    this.filters = {name: null, tags: null, premiere: null};
    this.pagination = {pageNumber: 1, pageSize: 5};
    this.sort = new Set();
  }

  setFilters(filters: Filters) {
    this.filters = {...this.filters, ...filters};
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
