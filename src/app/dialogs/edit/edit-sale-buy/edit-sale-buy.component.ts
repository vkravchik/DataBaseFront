import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auto} from "../../../model/Auto";
import {DialogService} from "../../../services/dialog.service";
import {AutoService} from "../../../services/auto.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoSaleBuy} from "../../../model/AutoSaleBuy";
import {SaleBuyService} from "../../../services/sale-buy.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-edit-sale-buy',
  templateUrl: './edit-sale-buy.component.html',
  styleUrls: ['./edit-sale-buy.component.css']
})
export class EditSaleBuyComponent implements OnInit {

  form: FormGroup;
  rows: AutoSaleBuy;
  currentRow: AutoSaleBuy;
  auto: Auto[];
  selectAuto: Auto;

  toggle: boolean;

  constructor(private _dialog: DialogService,
              private _auto: AutoService,
              private _saleBuy: SaleBuyService,
              private formBuilder: FormBuilder,
              private datepipe: DatePipe,
              private dialogRef: MatDialogRef<EditSaleBuyComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
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
      sale_buy: null,
      price: null,
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
    this._saleBuy.getSingle(this.data.id).subscribe((res: AutoSaleBuy) => {
      this.currentRow = res;
      this.form.patchValue({
        date: this.datepipe.transform(res.date, 'yyyy-MM-dd'),
        sale_buy: res.sale_buy,
        price: res.price,
      });
      this.toggle = this.form.getRawValue().sale_buy;
    });
  }

  toggleButton() {
    this.toggle = !this.toggle;
  }

}
