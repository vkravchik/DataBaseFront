import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {RouteService} from "../../../services/route.service";
import {AutoService} from "../../../services/auto.service";
import {QueryService} from "../../../services/query.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CategoryService} from "../../../services/category.service";
import {MarkaService} from "../../../services/marka.service";
import {AutoCategory} from "../../../model/AutoCategory";
import {AutoMarka} from "../../../model/AutoMarka";

@Component({
  selector: 'app-q6d',
  templateUrl: './q6d.component.html',
  styleUrls: ['./q6d.component.css']
})
export class Q6dComponent implements OnInit {
  form: FormGroup;
  auto: Auto[];
  categorys: AutoCategory[];
  markas: AutoMarka[];

  constructor(private _dialog: DialogService,
              private _auto: AutoService,
              private _category: CategoryService,
              private _marka: MarkaService,
              private query: QueryService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<Q6dComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      category: null,
      marka: null,
      auto: null,
    });
    this.getAutos();
    this.getCategorys();
    this.getMarkas();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stop(): void {
    this.query.dialogsForm = this.form.value;
  }

  selectedAuto(event) {
    this._auto.getSingle(event).subscribe(res => {
      this.form.getRawValue().auto = res.id;
    });
  }

  selectedCategory(event) {
    this._category.getSingle(event).subscribe(res => {
      this.form.patchValue({
        category: res.name
      });
    });
  }

  selectedMarka(event) {
    this._marka.getSingle(event).subscribe(res => {
      this.form.patchValue({
        marka: res.name
      });
    });
  }


  private getAutos() {
    this._auto.getAll().subscribe(res => {
      this.auto = res;
    });
  }

  private getCategorys() {
    this._category.getAll().subscribe(res => {
      this.categorys = res;
    });
  }

  private getMarkas() {
    this._marka.getAll().subscribe(res => {
      this.markas = res;
    });
  }
}
