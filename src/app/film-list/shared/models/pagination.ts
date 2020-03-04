import { ApiPagination } from '../../../core/api/models/pagination.model';


export class Pagination implements ApiPagination {
  pageNumber: number;
  pageSize: number;
  total: number;

  private constructor(count: number, page: number, total?: number) {
    this.pageNumber = page;
    this.pageSize = count;
    this.total = total;
  }


  static create(count: number = 5, page: number = 1, total: number = 0): Pagination {
    return new Pagination(count, page, total);
  }


  static init(response: ApiPagination): Pagination {
    if (!response) {
      return;
    }
    const page = response.pageNumber || 1;
    const total = response.total;
    const count = response.pageSize || total;
    if (!Number.isInteger(count * page * total)) {
      return;
    }
    return new Pagination(count, page, total);
  }


  isPageFirst(): boolean {
    return this.pageNumber === 1;
  }

  isPageLast(): boolean {
    return this.pageSize * this.pageNumber >= this.total;
  }


}
