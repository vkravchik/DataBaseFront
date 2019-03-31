import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {AutoDrivers} from "../../../model/AutoDrivers";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  form: FormGroup;
  currentDriver: AutoDrivers;

  constructor(private dialogRef: MatDialogRef<EditCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private _dialog: DialogService,
              private _category: CategoryService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
    });

    this.getSingle();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.form.value.id = this.data.id;
    console.log(this.form.value);
    this._dialog.dialogUpdate(this.form.value);
  }

  getSingle() {
    this._category.getSingle(this.data.id).subscribe((res: AutoDrivers) => {
      this.form.patchValue({
        name: res.name,
      });
    });
  }
}
