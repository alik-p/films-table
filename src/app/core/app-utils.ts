import { Film } from './api/models/film.model';

export class AppUtils {

  static generateFilmsData(count: number): Film[] {
    const tags: string[] = ['drama', 'horror', 'comedy', 'western', 'dark comedy', 'documentary', 'history'];
    const networks: string[] = ['AMC', 'Netflix', 'HBO'];
    const startDate = 819151200000;
    const endDate: number = Date.now();
    const result: Film[] = [];
    for (let i = 1; i <= count; i++) {
      result.push({
        id: i,
        name: `Film Name ${i}`,
        network: AppUtils.randomValues(networks, AppUtils.randomInteger(1, 3)),
        premiere: AppUtils.randomInteger(startDate, endDate),
        season: AppUtils.randomInteger(1, 15),
        tags: AppUtils.randomValues(tags, AppUtils.randomInteger(1, 3)),
      });
    }
    return result;
  }


  static randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  static randomValues<T>(data: T[], count: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < count; i++) {
      result.push(data[AppUtils.randomInteger(1, data.length - 1)]);
    }
    return result.filter((item, index, self) => self.indexOf(item) === index);
  }


}
