import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoPersonal} from "../../../model/AutoPersonal";
import {AutoDrivers} from "../../../model/AutoDrivers";
import {AutoBrigada} from "../../../model/AutoBrigada";
import {AutoBrigadir} from "../../../model/AutoBrigadir";
import {AutoGroup} from "../../../model/AutoGroup";
import {PersonalService} from "../../../services/personal.service";
import {DriverService} from "../../../services/driver.service";
import {BrigadaService} from "../../../services/brigada.service";
import {BrigadirService} from "../../../services/brigadir.service";
import {GroupService} from "../../../services/group.service";

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

  form: FormGroup;
  autoGroup: AutoGroup;
  personals: AutoPersonal[];
  selectPersonals: AutoPersonal;
  drivers: AutoDrivers[];
  selectDrivers: AutoDrivers;
  brigads: AutoBrigada[];
  selectBrigads: AutoBrigada;
  brigadirs: AutoBrigadir[];
  selectBrigadirs: AutoBrigadir;
  currentRow: AutoGroup;


  constructor(private _dialog: DialogService,
              private _group: GroupService,
              private _personal: PersonalService,
              private _driver: DriverService,
              private _brigada: BrigadaService,
              private _brigadir: BrigadirService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<EditGroupComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

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

    this.getSingle();

    this._personal.getAll().subscribe(res => {
      this.personals = res;
      this.selectPersonals = this.personals.find(r => r.id == this.currentRow.autoPersonal.id);
      this.form.patchValue({
        autoPersonal: this.selectPersonals.id,
      })
    });

    this._driver.getAll().subscribe(res => {
      this.drivers = res;
      this.selectDrivers = this.drivers.find(r => r.id == this.currentRow.autoDrivers.id);
      this.form.patchValue({
        autoDrivers: this.selectDrivers.id,
      })
    });

    this._brigada.getAll().subscribe(res => {
      this.brigads = res;
      this.selectBrigads = this.brigads.find(r => r.id == this.currentRow.autoBrigada.id);
      this.form.patchValue({
        autoBrigada: this.selectBrigads.id,
      })
    });

    this._brigadir.getAll().subscribe(res => {
      this.brigadirs = res;
      this.selectBrigadirs = this.brigadirs.find(r => r.id == this.currentRow.autoBrigadir.id);
      this.form.patchValue({
        autoBrigadir: this.selectBrigadirs.id,
      })
    });


  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.form.patchValue({
      autoPersonal: this.selectPersonals,
      autoDrivers: this.selectDrivers,
      autoBrigada: this.selectBrigads,
      autoBrigadir: this.selectBrigadirs,
    });
    this.form.value.id = this.data.id;
    this._dialog.dialogUpdate(this.form.value);
  }

  selectedPersonal(event) {
    this._personal.getSingle(event).subscribe(res => {
      this.selectPersonals = res;
      this.form.patchValue({
        autoPersonal: res.id
      });
    });
  }

  selectedBrigada(event) {
    this._brigada.getSingle(event).subscribe(res => {
      this.selectBrigads = res;
      this.form.patchValue({
        autoBrigada: res.id
      });
    });
  }

  selectedBrigadir(event) {
    this._brigadir.getSingle(event).subscribe(res => {
      this.selectBrigadirs = res;
      this.form.patchValue({
        autoBrigadir: res.id
      });
    });
  }

  selectedDriver(event) {
    this._driver.getSingle(event).subscribe(res => {
      this.selectDrivers = res;
      this.form.patchValue({
        autoDrivers: res.id
      });
    });
  }

  getSingle() {
    this._group.getSingle(this.data.id).subscribe((res: AutoGroup) => {
      this.currentRow = res;
    });
  }

}
