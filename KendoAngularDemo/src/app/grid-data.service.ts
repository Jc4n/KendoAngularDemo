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
  getGradeList(): Array<{ gradeName: string, grade: number }> {
    return [
      { gradeName: "一年級", grade: 1 },
      { gradeName: "二年級", grade: 2 },
      { gradeName: "三年級", grade: 3 }
    ];
  }
  getDeptList(): Array<{ deptName: string, deptId: number }> {
    return [
      { deptName: "資管系", deptId: 1 },
      { deptName: "企管系", deptId: 2 },
      { deptName: "資工系", deptId: 3 },
      { deptName: "機械系", deptId: 4 },
      { deptName: "應外系", deptId: 5 },
      { deptName: "中文系", deptId: 6 },
    ];
  }
}
