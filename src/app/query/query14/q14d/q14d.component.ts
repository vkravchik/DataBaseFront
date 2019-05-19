import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {QueryService} from "../../../services/query.service";
import {DatePipe} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {PersonalService} from "../../../services/personal.service";
import {AutoPersonal} from "../../../model/AutoPersonal";
import {AutoService} from "../../../services/auto.service";
import {Auto} from "../../../model/Auto";

@Component({
  selector: 'app-q14d',
  templateUrl: './q14d.component.html',
  styleUrls: ['./q14d.component.css']
})
export class Q14dComponent implements OnInit {
  form: FormGroup;
  toggle: boolean;
  persons: AutoPersonal[];
  auto: Auto[];
  person;
  aut = null;

  constructor(private _dialog: DialogService,
              private query: QueryService,
              private _auto: AutoService,
              private _person: PersonalService,
              private formBuilder: FormBuilder,
              private datepipe: DatePipe,
              private dialogRef: MatDialogRef<Q14dComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      person: null,
      auto: null,
      date_start: null,
      date_finish: null
    });
    this.getPersons();
    this.getAutos();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stop(): void {
    this.form.setValue({
      person: this.person,
      auto: this.aut,
      date_start: this.datepipe.transform(this.form.getRawValue().date_start, 'yyyy-MM-dd'),
      date_finish: this.datepipe.transform(this.form.getRawValue().date_finish, 'yyyy-MM-dd')
    });
    this.query.dialogsForm = this.form.value;
  }

  selectedPerson(event) {
    this._person.getSingle(event).subscribe(res => {
      this.person = res.id;
    });
  }

  selectedAuto(event) {
    this._auto.getSingle(event).subscribe(res => {
      this.aut = res.id;
    });
  }

  private getPersons() {
    this._person.getAll().subscribe(res => {
      this.persons = res;
    });
  }

  private getAutos() {
    this._auto.getAll().subscribe(res => {
      this.auto = res;
    });
  }
}
