import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {AutoService} from "../../../services/auto.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-har-route',
  templateUrl: './add-har-route.component.html',
  styleUrls: ['./add-har-route.component.css']
})
export class AddHarRouteComponent implements OnInit {
  form: FormGroup;
  auto: Auto[];
  toggle: boolean;

  constructor(private _dialog: DialogService,
              private _auto: AutoService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddHarRouteComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this._auto.getAll().subscribe(res => {
      this.auto = res;
    })
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      point_start: [null, Validators.required],
      point_finish: [null, Validators.required],
      date_start: [null, Validators.required],
      date_finish: null,
      auto: [{
        id: null,
        autoCategory: {
          id: null,
          name: null,
        },
        autoMarka: {
          id: null,
          name: null,
        }
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
    this._auto.getSingle(event).subscribe(res => {
      this.form.getRawValue().auto.id = res.id;

      this.form.getRawValue().auto.autoCategory.id = res.autoCategory.id;
      this.form.getRawValue().auto.autoCategory.name = res.autoCategory.name;

      this.form.getRawValue().auto.autoMarka.id = res.autoMarka.id;
      this.form.getRawValue().auto.autoMarka.name = res.autoMarka.name;
    });
  }

}
