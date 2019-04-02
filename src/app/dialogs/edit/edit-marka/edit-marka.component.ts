import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutoDrivers} from "../../../model/AutoDrivers";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogService} from "../../../services/dialog.service";
import {AutoMarka} from "../../../model/AutoMarka";
import {MarkaService} from "../../../services/marka.service";

@Component({
  selector: 'app-edit-marka',
  templateUrl: './edit-marka.component.html',
  styleUrls: ['./edit-marka.component.css']
})
export class EditMarkaComponent implements OnInit {
  form: FormGroup;
  current: AutoMarka;

  constructor(private dialogRef: MatDialogRef<EditMarkaComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private _dialog: DialogService,
              private _marka: MarkaService,
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
    this._marka.getSingle(this.data.id).subscribe((res: AutoDrivers) => {
      this.form.patchValue({
        name: res.name,
      });
    });
  }

}
