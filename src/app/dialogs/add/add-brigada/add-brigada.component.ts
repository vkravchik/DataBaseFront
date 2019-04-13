import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "../../../services/dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-brigada',
  templateUrl: './add-brigada.component.html',
  styleUrls: ['./add-brigada.component.css']
})
export class AddBrigadaComponent implements OnInit {

  form: FormGroup;

  constructor(private _dialog: DialogService,
              private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddBrigadaComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopAdd(): void {
    this._dialog.dialogAdd(this.form.value);
  }

}
