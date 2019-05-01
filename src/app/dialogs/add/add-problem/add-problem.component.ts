import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutoCategoryPersonal} from "../../../model/AutoCategoryPersonal";
import {DialogService} from "../../../services/dialog.service";
import {CategoryPersonalService} from "../../../services/category-personal.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {

  form: FormGroup;

  constructor(private _dialog: DialogService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddProblemComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopAdd(): void {
    this._dialog.dialogAdd(this.form.value);
  }

}
