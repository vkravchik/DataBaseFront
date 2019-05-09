import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "../../services/dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoStreet} from "../../model/AutoStreet";
import {AutoSaleBuy} from "../../model/AutoSaleBuy";
import {StreetService} from "../../services/street.service";

@Component({
  selector: 'app-dialogs-street',
  templateUrl: './dialogs-street.component.html',
  styleUrls: ['./dialogs-street.component.css']
})
export class DialogsStreetComponent implements OnInit {

  form: FormGroup;
  private currentRow: any;

  constructor(private _dialog: DialogService,
              private _street: StreetService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<DialogsStreetComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {  }

  ngOnInit() {
    this.form = this.formBuilder.group(new AutoStreet());

    if(!this.data.status) {
      this.getSingle();
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stop(): void {
    if(!this.data.status) {
      this.form.value.id = this.data.id;
    }
    this._dialog.dialogUpdate(this.form.value);
  }

  getSingle() {
    this._street.getSingle(this.data.id).subscribe((res: AutoStreet) => {
      this.currentRow = res;
      this.form.patchValue({
        street_start: res.street_start,
        street_finish: res.street_finish,
        intervall: res.intervall
      });
    });
  }



}
