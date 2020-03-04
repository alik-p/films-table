import { ApiPagination } from '../../../core/api/models/pagination.model';
import { Filters } from '../../../core/api/models/filters.model';
import { ApiParams } from '../../../core/api/models/params.model';

export class UserOptions {

  private filters: Filters;
  private pagination: ApiPagination;
  private sort: string | string[];

  constructor() {
    // Defaults:
    this.filters = {name: null, tags: null, premiere: null};
    this.pagination = {pageNumber: 1, pageSize: 5};
    this.sort = [];
  }

  setFilters(filters: Filters) {
    this.filters = {...this.filters, ...filters};
  }


  toApiParams(): ApiParams {
    return {
      ...this.pagination,
      sort: this.sort,
      filters: this.filters
    };

  }


}
