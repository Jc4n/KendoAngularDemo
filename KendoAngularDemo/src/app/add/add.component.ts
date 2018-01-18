import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GridModel } from '../model/gridModel';
import { GridDataService } from '../grid-data.service';
import { NgForm } from '@angular/forms';
import { parseNumber } from '@progress/kendo-angular-intl/dist/es/main';

@Component({
  selector: 'add-content',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addData: GridModel = new GridModel();
  @Output() save = new EventEmitter();
  @Output() closeWindow = new EventEmitter();

  defaultgradeList: { gradeName: string, grade: number } = { gradeName: "請選擇", grade: null };
  defaultDepteList: { deptName: string, deptId: number } = { deptName: "請選擇", deptId: null };
  gradeList: Array<{ gradeName: string, grade: number }> = this.gridDataService.getGradeList();
  deptList: Array<{ deptName: string, deptId: number }> = this.gridDataService.getDeptList();

  constructor(private gridDataService: GridDataService) { }

  ngOnInit() { }
  changeDept($event) {
    this.addData.deptId = $event.deptId;
    this.addData.deptName = $event.deptName;
  }
  changeGrade($event) {
    this.addData.grade = $event.grade;
    this.addData.gradeName = $event.gradeName;
  }

  /**
   * 儲存新增資料
   * 
   * @param {NgForm} form 
   * @memberof AddComponent
   */
  saveData(form: NgForm) {
    //表單驗證
    if (form.valid) {
      this.addData.id = parseNumber(this.addData.id);
      this.save.emit(this.addData);
    } else {
      //表單驗證不通過，將每個控制項markAsTouched顯示提示訊息
      Object.keys(form.controls).forEach(field => { // {1}
        const control = form.controls[field];            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
    }
  }
  close() {
    this.closeWindow.emit();
  }
}
