import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogService} from "../../../services/dialog.service";
import {HardRouteService} from "../../../services/hard-route.service";
import {AutoHardRoute} from "../../../model/AutoHardRoute";
import {AutoService} from "../../../services/auto.service";
import {Auto} from "../../../model/Auto";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-edit-hard-route',
  templateUrl: './edit-hard-route.component.html',
  styleUrls: ['./edit-hard-route.component.css']
})
export class EditHardRouteComponent implements OnInit {

  form: FormGroup;
  rows: AutoHardRoute;
  currentRow: AutoHardRoute;
  auto: Auto[];
  selectAuto: Auto;

  constructor(private _dialog: DialogService,
              private _auto: AutoService,
              private _hardRoute: HardRouteService,
              private formBuilder: FormBuilder,
              private datepipe: DatePipe,
              private dialogRef: MatDialogRef<EditHardRouteComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

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

    this.getSingle();

    this._auto.getAll().subscribe(res => {
      this.auto = res;
      if(this.auto) {
        this.selectAuto = this.auto.find(r => r.id == this.currentRow.auto.id);
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
    this._hardRoute.getSingle(this.data.id).subscribe((res: AutoHardRoute) => {
      this.currentRow = res;
      this.form.patchValue({
        point_start: res.point_start,
        point_finish: res.point_finish,
        date_start: this.datepipe.transform(res.date_start, 'yyyy-MM-dd'),
        date_finish: this.datepipe.transform(res.date_finish, 'yyyy-MM-dd'),
      });
    });
  }

}
