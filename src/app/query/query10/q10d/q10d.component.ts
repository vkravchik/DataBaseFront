import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {RouteService} from "../../../services/route.service";
import {AutoService} from "../../../services/auto.service";
import {QueryService} from "../../../services/query.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-q10d',
  templateUrl: './q10d.component.html',
  styleUrls: ['./q10d.component.css']
})
export class Q10dComponent implements OnInit {
//   this.form.patchValue({
//                          date: this.datepipe.transform(res.date, 'yyyy-MM-dd'),
//   price: res.price,
// });
  form: FormGroup;
  auto: Auto[];
  private selectAuto: number;

  constructor(private _dialog: DialogService,
              private _route: RouteService,
              private _auto: AutoService,
              private query: QueryService,
              private formBuilder: FormBuilder,
              private datepipe: DatePipe,
              private dialogRef: MatDialogRef<Q10dComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      auto: null,
      date: null
    });
    this.getAutos();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stop(): void {
    this.form.setValue({auto: this.selectAuto,
      date: this.datepipe.transform(this.form.getRawValue().date, 'yyyy-MM-dd')});
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
