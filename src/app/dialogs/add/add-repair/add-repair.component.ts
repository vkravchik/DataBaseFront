import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {AutoService} from "../../../services/auto.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {PersonalService} from "../../../services/personal.service";
import {AutoPersonal} from "../../../model/AutoPersonal";
import {AutoProblem} from "../../../model/AutoProblem";
import {ProblemService} from "../../../services/problem.service";

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.component.html',
  styleUrls: ['./add-repair.component.css']
})
export class AddRepairComponent implements OnInit {

  form: FormGroup;
  auto: Auto[];
  personals: AutoPersonal[];
  problems: AutoProblem[];

  constructor(private _dialog: DialogService,
              private _auto: AutoService,
              private _personal: PersonalService,
              private _problem: ProblemService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddRepairComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

    this._auto.getAll().subscribe(res => {
      this.auto = res;
    });

    this._personal.getAll().subscribe(res => {
      this.personals = res;
    });

    this._problem.getAll().subscribe(res => {
      this.problems = res;
    })
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      autoProblem: [{
        id: null,
        name: null,
      }, Validators.required],
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
      date: null,
      autoPersonal: [{
        id: null,
        name: null,
        surname: null,
        autoCategoryPersonal: {
          id: null,
          name: null,
        }
      }, Validators.required],
      price: null,
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

  selectedPersonal(event) {
    this._personal.getSingle(event).subscribe(res => {
      this.form.getRawValue().autoPersonal.id = res.id;
      this.form.getRawValue().autoPersonal.name = res.name;
      this.form.getRawValue().autoPersonal.surname = res.surname;

      this.form.getRawValue().autoPersonal.autoCategoryPersonal.id = res.autoCategoryPersonal.id;
      this.form.getRawValue().autoPersonal.autoCategoryPersonal.name = res.autoCategoryPersonal.name;
    });
  }

  selectedProblem(event) {
    this._problem.getSingle(event).subscribe(res => {
      this.form.getRawValue().autoProblem.id = res.id;
      this.form.getRawValue().autoProblem.name = res.name;
    });
  }
}
