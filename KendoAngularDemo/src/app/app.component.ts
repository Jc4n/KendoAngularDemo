import { Component, OnInit } from '@angular/core';
import { QueryModel } from './model/queryModel';
import { GridModel } from './model/gridModel';
import { NgForm } from '@angular/forms';
import { GridDataService } from './grid-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  constructor(private gridDataService: GridDataService) { }
  public gridData: GridModel[];
  defaultgradeList: { gradeName: string, grade: number } = { gradeName: "請選擇", grade: null };
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

  queryModel = new QueryModel();
  ngOnInit() {
   this.gridDataService.getAllData().subscribe(
    r => {
      this.gridData = r;
    });
  }
  onButtonClick() {
    alert('search!');
  }
 
  onSubmit(form: NgForm) {
    this.gridDataService.getAllData().subscribe(
      r => {
        this.gridData = r;
        //加入查詢條件
        if (this.queryModel.name) {
          this.gridData = this.gridData.filter(item => item.name.indexOf(this.queryModel.name) > -1);
        }
        if (this.queryModel.id) {
          this.gridData = this.gridData.filter(item => item.id === this.queryModel.id);
        }
        if (this.queryModel.gender) {
          this.gridData = this.gridData.filter(item => item.gender === this.queryModel.gender);
        }
        if (this.queryModel.grade) {
          this.gridData = this.gridData.filter(item => item.grade === this.queryModel.grade);
        }
        if (this.queryModel.dept && this.queryModel.dept.length > 0) {
          this.gridData = this.gridData.filter(item => this.queryModel.dept.includes(item.deptId));
        }
        if (this.queryModel.birthSt) {
          this.gridData = this.gridData.filter(item => new Date(item.birth) >= this.queryModel.birthSt);
        }
        if (this.queryModel.birthEnd) {
          this.gridData = this.gridData.filter(item => new Date(item.birth) <= this.queryModel.birthEnd);
        }
      });
  }
  changeDept($event) {
    this.queryModel.dept = new Array<number>();
    for (var i = 0; i < $event.length; i++) {
      this.queryModel.dept.push($event[i].deptId);
    }

  }
  changeGrade($event) {
    this.queryModel.grade = $event.grade;
  }

}
