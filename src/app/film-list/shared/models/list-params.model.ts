import { Filters } from '../../../core/api/models/filters.model';


export interface ListParams {
  filters: Filters;
  sort: string | string[];
}
