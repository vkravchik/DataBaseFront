import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoPersonal} from "../../../model/AutoPersonal";
import {AutoDrivers} from "../../../model/AutoDrivers";
import {AutoBrigada} from "../../../model/AutoBrigada";
import {AutoBrigadir} from "../../../model/AutoBrigadir";
import {PersonalService} from "../../../services/personal.service";
import {DriverService} from "../../../services/driver.service";
import {BrigadaService} from "../../../services/brigada.service";
import {BrigadirService} from "../../../services/brigadir.service";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  form: FormGroup;
  personals: AutoPersonal[];
  drivers: AutoDrivers[];
  brigads: AutoBrigada[];
  brigadirs: AutoBrigadir[];

  constructor(private _dialog: DialogService,
              private formBuilder: FormBuilder,
              private _personal: PersonalService,
              private _driver: DriverService,
              private _brigada: BrigadaService,
              private _brigadir: BrigadirService,
              private dialogRef: MatDialogRef<AddGroupComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    this._personal.getAll().subscribe(res => {
      this.personals = res;
    });

    this._driver.getAll().subscribe(res => {
      this.drivers = res;
    });

    this._brigada.getAll().subscribe(res => {
      this.brigads = res;
    });

    this._brigadir.getAll().subscribe(res => {
      this.brigadirs = res;
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      autoPersonal: {
        id: null,
        name: null,
        surname: null,
        autoCategoryPersonal: {
          id: null,
          name: null
        }
      },
      autoDrivers: {
        id: null,
        name: null,
        surname: null,
        auto: {
          id: null,
          autoCategory: {
            id: null,
            name: null
          },
          autoMarka: {
            id: null,
            name: null
          }
        }
      },
      autoBrigada: {
        id: null,
        name: null
      },
      autoBrigadir: {
        id: null,
        name: null,
        surname: null
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopAdd(): void {
    this._dialog.dialogAdd(this.form.value);
  }

  selectedPersonal(event) {
    this._personal.getSingle(event).subscribe(res => {
      this.form.getRawValue().autoPersonal.id = res.id;

      this.form.getRawValue().autoPersonal.name = res.name;
      this.form.getRawValue().autoPersonal.surname = res.surname;
    });
  }

  selectedBrigada(event) {
    this._brigada.getSingle(event).subscribe(res => {
      this.form.getRawValue().autoBrigada.id = res.id;

      this.form.getRawValue().autoBrigada.name = res.name;
    });
  }

  selectedBrigadir(event) {
    this._brigadir.getSingle(event).subscribe(res => {
      this.form.getRawValue().autoBrigadir.id = res.id;

      this.form.getRawValue().autoBrigadir.name = res.name;
      this.form.getRawValue().autoBrigadir.surname = res.surname;
    });
  }

  selectedDriver(event) {
    this._driver.getSingle(event).subscribe(res => {
      this.form.getRawValue().autoDrivers.id = res.id;

      this.form.getRawValue().autoDrivers.name = res.name;
      this.form.getRawValue().autoDrivers.surname = res.surname;
    });
  }
}
