import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "../../services/dialog.service";
import {StreetService} from "../../services/street.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoStreet} from "../../model/AutoStreet";
import {RouteService} from "../../services/route.service";
import {AutoRoute} from "../../model/AutoRoute";
import {AutoService} from "../../services/auto.service";
import {Auto} from "../../model/Auto";

@Component({
  selector: 'app-dialogs-route',
  templateUrl: './dialogs-route.component.html',
  styleUrls: ['./dialogs-route.component.css']
})
export class DialogsRouteComponent implements OnInit {

  form: FormGroup;
  private currentRow: any;
  auto: Auto[];
  street: AutoStreet[];
  private selectStreet: AutoStreet;
  private selectAuto: Auto;

  constructor(private _dialog: DialogService,
              private _route: RouteService,
              private _auto: AutoService,
              private _street: StreetService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<DialogsRouteComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group(new AutoRoute());

    if (!this.data.status) {
      this.getSingle();
    }
    this.getAutos();
    this.getStreets();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stop(): void {
    this.form.patchValue({
      auto: this.selectAuto,
      autoStreet: this.selectStreet,
    });
    if (!this.data.status) {
      this.form.value.id = this.data.id;
      console.log(this.form.value.id);
    }
    this._dialog.dialogUpdate(this.form.value);
  }

  private getSingle() {
    this._route.getSingle(this.data.id).subscribe((res: AutoRoute) => {
      this.currentRow = res;
      this.form.patchValue({
        passanger_count: res.passanger_count
      });
    });
  }

  private getStreets() {
    this._street.getAll().subscribe(res => {
      this.street = res;
      if(!this.data.status) {
        this.selectStreet = this.street.find(r => r.id == this.currentRow.autoStreet.id);
        this.form.patchValue({
          autoStreet: this.selectStreet.id
        })
      }
    });
  }

  private getAutos() {
    this._auto.getAll().subscribe(res => {
      this.auto = res;
      if(!this.data.status) {
        this.selectAuto = this.auto.find(r => r.id == this.currentRow.auto.id);
        this.form.patchValue({
          auto: this.selectAuto.id,
        })
      }
    });
  }

  selectedAuto(event) {
    this._auto.getSingle(event).subscribe(res => {
      this.selectAuto = res;
    });
  }

  selectedStreet(event) {
    this._street.getSingle(event).subscribe(res => {
      this.selectStreet = res;
    });
  }
}
