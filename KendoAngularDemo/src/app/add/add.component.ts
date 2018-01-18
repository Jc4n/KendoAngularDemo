import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GridModel } from '../model/gridModel';
import { GridDataService } from '../grid-data.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  addForm: FormGroup;

  defaultgradeList: { gradeName: string, grade: number } = { gradeName: "請選擇", grade: null };
  defaultDepteList: { deptName: string, deptId: number } = { deptName: "請選擇", deptId: null };
  gradeList: Array<{ gradeName: string, grade: number }> = this.gridDataService.getGradeList();
  deptList: Array<{ deptName: string, deptId: number }> = this.gridDataService.getDeptList();

  constructor(private gridDataService: GridDataService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() { }
  createForm() {
    this.addForm = this.fb.group({
      name: ['', Validators.required], // <--- the FormControl called "name"
      id: [null, Validators.required],
      gender: ['', Validators.required],
      birth: [null, Validators.required],
      deptId: [null, Validators.required],
      deptName: '',
      grade: [null, Validators.required],
      gradeName: '',
      height: [null, Validators.required],
      weight: [null, Validators.required]
    });
  }
  changeDept($event) {
    // this.addForm.patchValue({
    //   deptId : $event.deptId,
    //   deptName : $event.deptName
    // });
    // this.addForm.value.deptId = $event.deptId;
    // this.addForm.value.deptName = $event.deptName;
  }
  changeGrade($event) {
    // this.addForm.patchValue({
    //   grade : $event.grade,
    //   gradeName : $event.gradeName
    // });
    // this.addForm.value.grade = $event.grade;
    // this.addForm.value.gradeName = $event.gradeName;
  }
  saveData() {
    if (this.addForm.valid) {
      this.addData = new GridModel(this.addForm.value);
      this.addData.id = parseNumber(this.addForm.value.id);
      this.addData.grade = this.addForm.value.grade.grade;
      this.addData.gradeName = this.addForm.value.grade.gradeName;
      this.addData.deptId = this.addForm.value.deptId.deptId;
      this.addData.deptName = this.addForm.value.deptId.deptName;

      this.save.emit(this.addData);
    } else {
      Object.keys(this.addForm.controls).forEach(field => { // {1}
        const control = this.addForm.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
    }
  }
  close() {
    this.closeWindow.emit();
  }
  isFieldValid(field: string) {
    return (this.addForm.get(field).valid && this.addForm.get(field).touched) ||
      (this.addForm.get(field).untouched);
  }
}
