import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AutoCategory} from "../../../model/AutoCategory";
import {DialogService} from "../../../services/dialog.service";
import {CategoryService} from "../../../services/category.service";
import {QueryService} from "../../../services/query.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-q8d',
  templateUrl: './q8d.component.html',
  styleUrls: ['./q8d.component.css']
})
export class Q8dComponent implements OnInit {
  form: FormGroup;
  categorys: AutoCategory[];

  constructor(private _dialog: DialogService,
              private _category: CategoryService,
              private query: QueryService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<Q8dComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      category: null,
    });
    this.getCategorys();
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

  private getCategorys() {
    this._category.getAll().subscribe(res => {
      this.categorys = res;
    });
  }
}
