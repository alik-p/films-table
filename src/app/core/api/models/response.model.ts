import { Film } from './film.model';
import { ApiPagination } from './params.model';

export interface ApiResponse extends ApiPagination {
  data: Film[];
}
