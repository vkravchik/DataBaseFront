import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CategoryPersonalService} from "../../../services/category-personal.service";
import {AutoCategoryPersonal} from "../../../model/AutoCategoryPersonal";

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html',
  styleUrls: ['./add-personal.component.css']
})
export class AddPersonalComponent implements OnInit {

  form: FormGroup;
  category: AutoCategoryPersonal[];

  constructor(private _dialog: DialogService,
              private _category: CategoryPersonalService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddPersonalComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this._category.getAll().subscribe(res => {
      this.category = res;
    })
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
      surname: [null, Validators.required],
      autoCategoryPersonal: [{
        id: null,
        name: null,
      }, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopAdd(): void {
    this._dialog.dialogAdd(this.form.value);
  }

  selectedAuto(event) {
    this._category.getSingle(event).subscribe(res => {
      this.form.getRawValue().autoCategoryPersonal.id = res.id;

      this.form.getRawValue().autoCategoryPersonal.name = res.name;
    });
  }

}
