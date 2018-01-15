import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // 我們要使用的Http
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GridDataService {
  constructor(private http: Http) { }
  /**
   * 取得全部資料
   * 
   * @memberof GridDataService
   */
  getAllData(): Observable<any> {
    return this.http
      .get('/assets/studentList.json')
      .map(res => res.json());
  }
}
