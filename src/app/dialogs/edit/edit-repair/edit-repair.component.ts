import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {AutoService} from "../../../services/auto.service";
import {DatePipe} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoRepair} from "../../../model/AutoRepair";
import {AutoPersonal} from "../../../model/AutoPersonal";
import {AutoProblem} from "../../../model/AutoProblem";
import {PersonalService} from "../../../services/personal.service";
import {ProblemService} from "../../../services/problem.service";
import {RepairService} from "../../../services/repair.service";

@Component({
  selector: 'app-edit-repair',
  templateUrl: './edit-repair.component.html',
  styleUrls: ['./edit-repair.component.css']
})
export class EditRepairComponent implements OnInit {

  form: FormGroup;
  rows: AutoRepair;
  currentRow: AutoRepair;


  auto: Auto[];
  selectAuto: Auto;

  personal: AutoPersonal[];
  selectPersonal: AutoPersonal;

  problem: AutoProblem[];
  selectProblem: AutoProblem;

  constructor(private _dialog: DialogService,
              private _auto: AutoService,
              private _personal: PersonalService,
              private _problem: ProblemService,
              private _repair: RepairService,
              private formBuilder: FormBuilder,
              private datepipe: DatePipe,
              private dialogRef: MatDialogRef<EditRepairComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
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

    this.getSingle();

    this._auto.getAll().subscribe(res => {
      this.auto = res;
      if (this.auto) {
        this.selectAuto = this.auto.find(r => r.id == this.currentRow.auto.id);
        this.form.patchValue({
          auto: this.selectAuto.id,
        })
      }
    });

    this._personal.getAll().subscribe(res => {
      this.personal = res;
      if (this.personal) {
        this.selectPersonal = this.personal.find(r => r.id == this.currentRow.autoPersonal.id);
        this.form.patchValue({
          autoPersonal: this.selectPersonal.id,
        })
      }
    });

    this._problem.getAll().subscribe(res => {
      this.problem = res;
      if (this.problem) {
        this.selectProblem = this.problem.find(r => r.id == this.currentRow.autoProblem.id);
        this.form.patchValue({
          autoProblem: this.selectProblem.id,
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
      autoPersonal: this.selectPersonal,
      autoProblem: this.selectProblem,
    });
    this.form.value.id = this.data.id;
    this._dialog.dialogUpdate(this.form.value);
  }

  getSingle() {
    this._repair.getSingle(this.data.id).subscribe((res: AutoRepair) => {
      this.currentRow = res;
      this.form.patchValue({
        date: this.datepipe.transform(res.date, 'yyyy-MM-dd'),
        price: res.price,
      });
    });
  }

  selectedAuto(event) {
    this._auto.getSingle(event).subscribe(res => {
      this.selectAuto = res;
      this.form.patchValue({
        auto: res.id
      });
    });
  }

  selectedPersonal(event) {
    this._personal.getSingle(event).subscribe(res => {
      this.selectPersonal = res;
      this.form.patchValue({
        autoPersonal: res.id
      });
    });
  }

  selectedProblem(event) {
    this._problem.getSingle(event).subscribe(res => {
      this.selectProblem = res;
      this.form.patchValue({
        autoProblem: res.id
      });
    });
  }

}
