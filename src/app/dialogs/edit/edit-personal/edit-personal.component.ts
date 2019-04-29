import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoPersonal} from "../../../model/AutoPersonal";
import {AutoCategoryPersonal} from "../../../model/AutoCategoryPersonal";
import {CategoryPersonalService} from "../../../services/category-personal.service";
import {PersonalService} from "../../../services/personal.service";

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.css']
})
export class EditPersonalComponent implements OnInit {

  form: FormGroup;
  currentRow: AutoPersonal;
  category: AutoCategoryPersonal[];
  selectCategory: AutoCategoryPersonal;

  constructor(private _dialog: DialogService,
              private _category: CategoryPersonalService,
              private _personal: PersonalService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<EditPersonalComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
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

    this.getSingle();

    this._category.getAll().subscribe(res => {
      this.category = res;
      if(this.category) {
        this.selectCategory = this.category.find(r => r.id == this.currentRow.autoCategoryPersonal.id);
        this.form.patchValue({
          autoCategoryPersonal: this.selectCategory.id,
        })
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.form.patchValue({
      autoCategoryPersonal: this.selectCategory,
    });
    this.form.value.id = this.data.id;
    this._dialog.dialogUpdate(this.form.value);
  }

  selectedAuto(event) {
    this._category.getSingle(event).subscribe(res => {
      this.selectCategory = res;
      this.form.patchValue({
        autoCategoryPersonal: res.id
      });
    });
  }

  getSingle() {
    this._personal.getSingle(this.data.id).subscribe((res: AutoPersonal) => {
      this.currentRow = res;
      this.form.patchValue({
        name: res.name,
        surname: res.surname,
      });
    });
  }

}
