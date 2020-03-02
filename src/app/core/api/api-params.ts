export interface ApiPagination {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
}

export interface ApiParams extends ApiPagination {
  sort?: string | string[];
}
