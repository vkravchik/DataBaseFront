import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {QueryService} from "../../../services/query.service";
import {DatePipe} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-q12d',
  templateUrl: './q12d.component.html',
  styleUrls: ['./q12d.component.css']
})
export class Q12dComponent implements OnInit {
  form: FormGroup;
  toggle: boolean;

  constructor(private _dialog: DialogService,
              private query: QueryService,
              private formBuilder: FormBuilder,
              private datepipe: DatePipe,
              private dialogRef: MatDialogRef<Q12dComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      status: null,
      date_start: null,
      date_finish: null
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stop(): void {
    this.form.setValue({
      status: this.toggle ? 1 : 0,
      date_start: this.datepipe.transform(this.form.getRawValue().date_start, 'yyyy-MM-dd'),
      date_finish: this.datepipe.transform(this.form.getRawValue().date_finish, 'yyyy-MM-dd')
    });
    this.query.dialogsForm = this.form.value;
  }

  toggleButton() {
    this.toggle = !this.toggle;
  }
}
