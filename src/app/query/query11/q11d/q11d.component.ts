import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {AutoCategory} from "../../../model/AutoCategory";
import {AutoMarka} from "../../../model/AutoMarka";
import {DialogService} from "../../../services/dialog.service";
import {AutoService} from "../../../services/auto.service";
import {CategoryService} from "../../../services/category.service";
import {MarkaService} from "../../../services/marka.service";
import {QueryService} from "../../../services/query.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ProblemService} from "../../../services/problem.service";
import {AutoProblem} from "../../../model/AutoProblem";

@Component({
  selector: 'app-q11d',
  templateUrl: './q11d.component.html',
  styleUrls: ['./q11d.component.css']
})
export class Q11dComponent implements OnInit {
  form: FormGroup;
  categorys: AutoCategory[];
  details: AutoProblem[];

  constructor(private _dialog: DialogService,
              private _category: CategoryService,
              private _problem: ProblemService,
              private query: QueryService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<Q11dComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      category: null,
      detail: null,
    });
    this.getCategorys();
    this.getDetails();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stop(): void {
    this.query.dialogsForm = this.form.value;
  }

  selectedCategory(event) {
    this._category.getSingle(event).subscribe(res => {
      this.form.patchValue({
        category: res.name
      });
    });
  }

  selectedDetail(event) {
    this._problem.getSingle(event).subscribe(res => {
      this.form.patchValue({
        detail: res.name
      });
    });
  }

  private getCategorys() {
    this._category.getAll().subscribe(res => {
      this.categorys = res;
    });
  }

  private getDetails() {
    this._problem.getAll().subscribe(res => {
      this.details = res;
    });
  }

}
