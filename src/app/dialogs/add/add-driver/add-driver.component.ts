import {Component, Inject, OnInit} from '@angular/core';
import {AutoMarka} from "../../../model/AutoMarka";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogService} from "../../../services/dialog.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MarkaService} from "../../../services/marka.service";
import {CategoryService} from "../../../services/category.service";
import {AutoCategory} from "../../../model/AutoCategory";

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  form: FormGroup;
  marka: AutoMarka[];
  category: AutoCategory[];

  constructor(private _marka: MarkaService,
              private _category: CategoryService,
              private _dialog: DialogService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddDriverComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    this._marka.getAll().subscribe(res => {
      this.marka = res;
    });

    this._category.getAll().subscribe(res => {
      this.category = res;
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      surname: ['', Validators.required],
      auto: {
        id: null,
        id_category: {
          id: null,
          name: null,
        },
        id_marka: {
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
    console.log(this.form.value);
    this._dialog.dialogAdd(this.form.value);
  }

  selectedCategory(event) {
    this._category.getSingle(event).subscribe(res => {
      this.form.getRawValue().auto.id_category.id = res.id;
      this.form.getRawValue().auto.id_category.name = res.name;
    });
  }
  selectedMarka(event) {
    this._marka.getSingle(event).subscribe(res => {
      this.form.getRawValue().auto.id_marka.id = res.id;
      this.form.getRawValue().auto.id_marka.name = res.name;
    });
  }
}
