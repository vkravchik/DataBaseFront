import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {RouteService} from "../../../services/route.service";
import {AutoService} from "../../../services/auto.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {QueryService} from "../../../services/query.service";

@Component({
  selector: 'app-q2d',
  templateUrl: './q2d.component.html',
  styleUrls: ['./q2d.component.css']
})
export class Q2dComponent implements OnInit {

  form: FormGroup;
  auto: Auto[];
  private selectAuto: number;

  constructor(private _dialog: DialogService,
              private _route: RouteService,
              private _auto: AutoService,
              private query: QueryService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<Q2dComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      auto: null
    });
    this.getAutos();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stop(): void {
    this.form.setValue({auto: this.selectAuto});
    this.query.dialogsForm = this.form.value;
  }

  private getAutos() {
    this._auto.getAll().subscribe(res => {
      this.auto = res;
    });
  }

  selectedAuto(event) {
    if(event !== undefined) {
      this._auto.getSingle(event).subscribe(res => {
        this.selectAuto = res.id;
      });
    } else {
      this.selectAuto = null;
    }
  }
}
