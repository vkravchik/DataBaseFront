import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogService} from "../../../services/dialog.service";
import {AutoCategoryPersonal} from "../../../model/AutoCategoryPersonal";
import {CategoryPersonalService} from "../../../services/category-personal.service";

@Component({
  selector: 'app-edit-category-personal',
  templateUrl: './edit-category-personal.component.html',
  styleUrls: ['./edit-category-personal.component.css']
})
export class EditCategoryPersonalComponent implements OnInit {

  form: FormGroup;
  currentRow: AutoCategoryPersonal;

  constructor(private dialogRef: MatDialogRef<EditCategoryPersonalComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private _dialog: DialogService,
              private _personal: CategoryPersonalService,
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
    this._dialog.dialogUpdate(this.form.value);
  }

  getSingle() {
    this._personal.getSingle(this.data.id).subscribe((res: AutoCategoryPersonal) => {
      this.form.patchValue({
        name: res.name,
      });
    });
  }


}
