import { ApiPagination } from './pagination.model';
import { Filter } from './filter.model';


export interface ApiParams extends ApiPagination {
  sort?: string | string[];
  filters?: Filter[];
}
