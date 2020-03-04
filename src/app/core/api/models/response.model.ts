import { Film } from './film.model';
import { ApiPagination } from './pagination.model';


export interface ApiResponse {
  content: Film[];
  pagination: ApiPagination;
}
