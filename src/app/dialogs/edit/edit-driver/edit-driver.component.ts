import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {AutoService} from "../../../services/auto.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoDrivers} from "../../../model/AutoDrivers";
import {DriverService} from "../../../services/driver.service";

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  form: FormGroup;
  driver: AutoDrivers;
  currentDriver: AutoDrivers;
  auto: Auto[];
  selectAuto: Auto;

  flag = false;

  constructor(private _dialog: DialogService,
              private _auto: AutoService,
              private _driver: DriverService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<EditDriverComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      surname: ['', Validators.required],
      auto: {
        id: null,
        autoCategory: {
          id: null,
          name: null,
        },
        autoMarka: {
          id: null,
          name: null,
        }
      },
    });

    this.getSingle();

    this._auto.getAll().subscribe(res => {
      this.auto = res;
      if(this.auto) {
        this.selectAuto = this.auto.find(r => r.id == this.currentDriver.auto.id);
        this.form.patchValue({
          auto: this.selectAuto.id,
        })
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.form.patchValue({
      auto: this.selectAuto,
    });
    this.form.value.id = this.data.id;
    this._dialog.dialogUpdate(this.form.value);
  }

  selectedAuto(event) {
    this._auto.getSingle(event).subscribe(res => {
      this.selectAuto = res;
      this.form.patchValue({
        auto: res.id
      });
    });
  }

  getSingle() {
    this._driver.getSingle(this.data.id).subscribe((res: AutoDrivers) => {
      this.currentDriver = res;
      this.form.patchValue({
        name: res.name,
        surname: res.surname,
      });
    });
  }
}
