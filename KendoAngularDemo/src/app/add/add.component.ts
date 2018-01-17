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

  ngOnInit() {}
  changeDept($event) {
    this.addData.deptId = $event.deptId;
    this.addData.deptName = $event.deptName;
  }
  changeGrade($event) {
    this.addData.grade = $event.grade;
    this.addData.gradeName = $event.gradeName;
  }
  saveData(form: NgForm) {
    this.addData.id=parseNumber(this.addData.id);
    this.save.emit({ form: form, data: this.addData });
  }
  close() {
    this.closeWindow.emit();
  }
}
