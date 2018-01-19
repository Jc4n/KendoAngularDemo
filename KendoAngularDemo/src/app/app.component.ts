import { Component, OnInit } from '@angular/core';
import { QueryModel } from './model/queryModel';
import { GridModel } from './model/gridModel';
import { NgForm } from '@angular/forms';
import { GridDataService } from './grid-data.service';
import { parseNumber } from '@progress/kendo-angular-intl/dist/es/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  constructor(private gridDataService: GridDataService) { }
  public gridData: GridModel[];
  dialogOpened: boolean = false;
  windowOpened: boolean = false;
  addResultMsg: string = ''; //新增送出訊息
  queryModel = new QueryModel();
  //取得下拉選單
  defaultgradeList: { gradeName: string, grade: number } = { gradeName: "請選擇", grade: null };
  gradeList: Array<{ gradeName: string, grade: number }> = this.gridDataService.getGradeList();
  deptList: Array<{ deptName: string, deptId: number }> = this.gridDataService.getDeptList();

  ngOnInit() {
    //取得資料
    this.gridDataService.getAllData().subscribe(
      r => {
        this.gridData = r;
      });
  }

  /**
   * 查詢資料
   * 
   * @param {NgForm} form 
   * @memberof AppComponent
   */
  onSubmit(form: NgForm) {
    //取得選擇的系所
    let selectedDept = new Array<number>();
    if (this.queryModel.dept) {
      for (var i = 0; i < this.queryModel.dept.length; i++) {
        selectedDept.push(this.queryModel.dept[i].deptId);
      }
    }

    //重新取得資料後，加入查詢條件
    this.gridDataService.getAllData().subscribe(
      r => {
        this.gridData = r;
        //加入查詢條件
        if (this.queryModel.name) {
          this.gridData = this.gridData.filter(item => item.name.indexOf(this.queryModel.name) > -1);
        }
        if (this.queryModel.id) {
          this.gridData = this.gridData.filter(item => item.id === parseNumber(this.queryModel.id));
        }
        if (this.queryModel.gender) {
          this.gridData = this.gridData.filter(item => item.gender === this.queryModel.gender);
        }
        if (this.queryModel.grade) {
          this.gridData = this.gridData.filter(item => item.grade === this.queryModel.grade);
        }
        if (selectedDept && selectedDept.length > 0) {
          this.gridData = this.gridData.filter(item => selectedDept.includes(item.deptId));
        }
        if (this.queryModel.birthSt) {
          this.gridData = this.gridData.filter(item => new Date(item.birth) >= this.queryModel.birthSt);
        }
        if (this.queryModel.birthEnd) {
          this.gridData = this.gridData.filter(item => new Date(item.birth) <= this.queryModel.birthEnd);
        }
      });
  }

  changeGrade($event) {
    this.queryModel.grade = $event.grade;
  }
  open(component) {
    this[component + 'Opened'] = true;
  }
  close(component) {
    this[component + 'Opened'] = false;
  }


  /**
   * 新增資料
   * 
   * @param {GridModel} $event 
   * @memberof AppComponent
   */
  addData($event: GridModel) {
    //判斷學號是否存在，不存在才繼續往下做
    let count: number = this.gridData.filter(item => item.id === parseNumber($event.id)).length;
    if (count > 0) {
      this.addResultMsg = '學號已經存在，請重新輸入!';
      this.open('dialog');
    } else {
      this.gridData.push($event);
      this.addResultMsg = '新增成功!';
      this.open('dialog');
      this.close('window');
    }
  }
}
