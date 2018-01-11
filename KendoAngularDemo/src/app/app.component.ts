import { Component } from '@angular/core';
import { products } from './products';
import { QueryModel } from './model/queryModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'app';
  public value: Date = new Date();
  defaultgradeList:{ gradeName: string, grade: number } = { gradeName: "請選擇", grade: null };
  gradeList: Array<{ gradeName: string, grade: number }> = [
    { gradeName: "一年級", grade: 1 },
    { gradeName: "二年級", grade: 2 },
    { gradeName: "三年級", grade: 3 }
  ];
  deptList: Array<{ deptName: string, deptId: number }> = [
    { deptName: "資管系", deptId: 1 },
    { deptName: "企管系", deptId: 2 },
    { deptName: "資工系", deptId: 3 },
    { deptName: "機械系", deptId: 4 },
    { deptName: "應外系", deptId: 5 },
    { deptName: "中文系", deptId: 6 },
  ];
  public itemValue = ['Basketball', 'Cricket'];
  public gridData: any[] = products;
  queryModel = new QueryModel();
  onButtonClick() {
    alert('search!');
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.queryModel); }

  onSubmit() {
    console.log(this.queryModel);
  }
}
