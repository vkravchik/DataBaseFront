import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoCategory} from "../../../model/AutoCategory";
import {CategoryService} from "../../../services/category.service";
import {MarkaService} from "../../../services/marka.service";
import {AutoMarka} from "../../../model/AutoMarka";

@Component({
  selector: 'app-add-auto',
  templateUrl: './add-auto.component.html',
  styleUrls: ['./add-auto.component.css']
})
export class AddAutoComponent implements OnInit {

  form: FormGroup;
  categorys: AutoCategory[];
  markas: AutoMarka[];

  constructor(private _dialog: DialogService,
              private _category: CategoryService,
              private _marka: MarkaService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddAutoComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this._category.getAll().subscribe(res => {
      this.categorys = res;
    });

    this._marka.getAll().subscribe(res => {
      this.markas = res;
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      autoCategory: {
        id: null,
        name: null,
      },
      autoMarka: {
        id: null,
        name: null,
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopAdd(): void {
    this._dialog.dialogAdd(this.form.value);
  }
  selectedCategory(event) {
    this._category.getSingle(event).subscribe(res => {
      this.form.getRawValue().autoCategory.id = res.id;
      this.form.getRawValue().autoCategory.name = res.name;
    });
  }

  selectedMarka(event) {
    this._marka.getSingle(event).subscribe(res => {
      this.form.getRawValue().autoMarka.id = res.id;
      this.form.getRawValue().autoMarka.name = res.name;
    });
  }

}
