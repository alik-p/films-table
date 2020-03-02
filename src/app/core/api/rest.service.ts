// @ts-ignore
import * as mockData from 'src/assets/films-mock.json';
import { Observable, of } from 'rxjs';
import { ApiParams } from './models/params.model';


export abstract class RestService {

  protected baseUrl = null; // not used because of mock data


  // TODO parameters
  protected get<T>(relativeUrl: string, parameters?: ApiParams): Observable<T> {
    return of<T>(this.mockData<T>());
  }


  private mockData<T>(): T {
    return mockData['default']['films'];
  }


}


