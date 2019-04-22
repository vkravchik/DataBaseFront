import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {AutoService} from "../../../services/auto.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoCategory} from "../../../model/AutoCategory";
import {AutoMarka} from "../../../model/AutoMarka";
import {CategoryService} from "../../../services/category.service";
import {MarkaService} from "../../../services/marka.service";

@Component({
  selector: 'app-edit-auto',
  templateUrl: './edit-auto.component.html',
  styleUrls: ['./edit-auto.component.css']
})
export class EditAutoComponent implements OnInit {

  form: FormGroup;
  auto: Auto;
  currentAuto: Auto;
  categorys: AutoCategory[];
  markas: AutoMarka[];
  selectCategory: AutoCategory;
  selectMarka: AutoMarka;

  constructor(private _dialog: DialogService,
              private _category: CategoryService,
              private _marka: MarkaService,
              private _auto: AutoService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<EditAutoComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

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

    this.getSingle();

    this._category.getAll().subscribe(res => {
      this.categorys = res;
      if(this.categorys) {
        const toSelect = this.categorys.find(r => r.id == this.currentAuto.autoCategory.id);
        this.form.patchValue({
          autoCategory: toSelect.id,
        })
      }
    });

    this._marka.getAll().subscribe(res => {
      this.markas = res;
      if(this.markas) {
        const toSelect = this.markas.find(r => r.id == this.currentAuto.autoMarka.id);
        this.form.patchValue({
          autoMarka: toSelect.id,
        })
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.form.patchValue({
      autoCategory: this.selectCategory,
      autoMarka: this.selectMarka,
    });
    this.form.value.id = this.data.id;
    this._dialog.dialogUpdate(this.form.value);
  }

  selectedCategory(event) {
    this._category.getSingle(event).subscribe(res => {
      this.selectCategory = res;
      this.form.patchValue({
        autoCategory: res.id
      });
    });
  }

  selectedMarka(event) {
    this._marka.getSingle(event).subscribe(res => {
      this.selectMarka = res;
      this.form.patchValue({
        autoMarka: res.id
      });
    });
  }

  getSingle() {
    this._auto.getSingle(this.data.id).subscribe((res: Auto) => {
      this.currentAuto = res;

      this.form.patchValue({
        autoCategory: res.autoCategory,
        autoMarka: res.autoMarka,
      });
    });
  }

}
