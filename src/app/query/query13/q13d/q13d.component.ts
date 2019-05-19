import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {QueryService} from "../../../services/query.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {BrigadirService} from "../../../services/brigadir.service";
import {AutoBrigadir} from "../../../model/AutoBrigadir";

@Component({
  selector: 'app-q13d',
  templateUrl: './q13d.component.html',
  styleUrls: ['./q13d.component.css']
})
export class Q13dComponent implements OnInit {
  form: FormGroup;
  brigadirs: AutoBrigadir[];

  constructor(private _dialog: DialogService,
              private _brigadir: BrigadirService,
              private query: QueryService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<Q13dComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      brigadir: null,
    });
    this.getBrigadirs();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stop(): void {
    this.query.dialogsForm = this.form.value;
  }

  selectedBrigadir(event) {
    this._brigadir.getSingle(event).subscribe(res => {
      this.form.patchValue({
        brigadir: res.id
      });
    });
  }

  private getBrigadirs() {
    this._brigadir.getAll().subscribe(res => {
      this.brigadirs = res;
    });
  }
}
