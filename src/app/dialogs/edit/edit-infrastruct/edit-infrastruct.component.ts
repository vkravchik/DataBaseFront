import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {HardRouteService} from "../../../services/hard-route.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoInfrastruct} from "../../../model/AutoInfrastruct";
import {AutoCategory} from "../../../model/AutoCategory";
import {CategoryService} from "../../../services/category.service";
import {InfrastructService} from "../../../services/infrastruct.service";

@Component({
  selector: 'app-edit-infrastruct',
  templateUrl: './edit-infrastruct.component.html',
  styleUrls: ['./edit-infrastruct.component.css']
})
export class EditInfrastructComponent implements OnInit {

  form: FormGroup;
  currentRow: AutoInfrastruct;
  category: AutoCategory[];
  selectCategory: AutoCategory;

  constructor(private _dialog: DialogService,
              private _category: CategoryService,
              private _infrastruct: InfrastructService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<EditInfrastructComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
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

    this.getSingle();

    this._category.getAll().subscribe(res => {
      this.category = res;
      if(this.category) {
        this.selectCategory = this.category.find(r => r.id == this.currentRow.autoCategory.id);
        this.form.patchValue({
          autoCategory: this.selectCategory.id,
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
    });
    this.form.value.id = this.data.id;
    this._dialog.dialogUpdate(this.form.value);
  }

  selectedAuto(event) {
    this._category.getSingle(event).subscribe(res => {
      this.selectCategory = res;
      this.form.patchValue({
        autoCategory: res.id
      });
    });
  }

  getSingle() {
    this._infrastruct.getSingle(this.data.id).subscribe((res: AutoInfrastruct) => {
      this.currentRow = res;
      this.form.patchValue({
        name: res.name,
        street: res.street,
      });
    });
  }

}
