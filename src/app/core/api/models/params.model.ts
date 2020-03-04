import { ApiPagination } from './pagination.model';
import { Filters } from './filters.model';


export interface ApiParams extends ApiPagination {
  sort?: string | string[];
  filters?: Filters;
}
