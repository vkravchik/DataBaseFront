import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {AutoService} from "../../../services/auto.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CategoryService} from "../../../services/category.service";
import {AutoCategory} from "../../../model/AutoCategory";

@Component({
  selector: 'app-add-infrastruct',
  templateUrl: './add-infrastruct.component.html',
  styleUrls: ['./add-infrastruct.component.css']
})
export class AddInfrastructComponent implements OnInit {

  form: FormGroup;
  category: AutoCategory[];

  constructor(private _dialog: DialogService,
              private _category: CategoryService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddInfrastructComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this._category.getAll().subscribe(res => {
      this.category = res;
    })
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
      street: [null, Validators.required],
      autoCategory: [{
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
      this.form.getRawValue().autoCategory.id = res.id;

      this.form.getRawValue().autoCategory.name = res.name;
    });
  }

}
