import {Component, Inject, OnInit} from '@angular/core';
import {AutoMarka} from "../../../model/AutoMarka";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogService} from "../../../services/dialog.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MarkaService} from "../../../services/marka.service";
import {CategoryService} from "../../../services/category.service";
import {AutoCategory} from "../../../model/AutoCategory";
import {AutoService} from "../../../services/auto.service";
import {Auto} from "../../../model/Auto";

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  form: FormGroup;
  marka: AutoMarka[];
  auto: Auto[];
  category: AutoCategory[];

  constructor(private _marka: MarkaService,
              private _category: CategoryService,
              private _dialog: DialogService,
              private _auto: AutoService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddDriverComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this._auto.getAll().subscribe(res => {
      this.auto = res;
    })
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      surname: ['', Validators.required],
      auto: {
        id: null,
        autoCategory: {
          id: null,
          name: null,
        },
        autoMarka: {
          id: null,
          name: null,
        }
      },
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopAdd(): void {
    this._dialog.dialogAdd(this.form.value);
  }
  selectedAuto(event) {
    this._auto.getSingle(event).subscribe(res => {
      this.form.getRawValue().auto.id = res.id;

      this.form.getRawValue().auto.autoCategory.id = res.autoCategory.id;
      this.form.getRawValue().auto.autoCategory.name = res.autoCategory.name;

      this.form.getRawValue().auto.autoMarka.id = res.autoMarka.id;
      this.form.getRawValue().auto.autoMarka.name = res.autoMarka.name;
    });
  }
}
