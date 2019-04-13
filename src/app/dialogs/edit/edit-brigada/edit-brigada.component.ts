import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutoDrivers} from "../../../model/AutoDrivers";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogService} from "../../../services/dialog.service";
import {AutoBrigada} from "../../../model/AutoBrigada";
import {BrigadaService} from "../../../services/brigada.service";

@Component({
  selector: 'app-edit-brigada',
  templateUrl: './edit-brigada.component.html',
  styleUrls: ['./edit-brigada.component.css']
})
export class EditBrigadaComponent implements OnInit {

  form: FormGroup;
  currentRow: AutoBrigada;

  constructor(private dialogRef: MatDialogRef<EditBrigadaComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private _dialog: DialogService,
              private _brigada: BrigadaService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
    });

    this.getSingle();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.form.value.id = this.data.id;
    console.log(this.form.value);
    this._dialog.dialogUpdate(this.form.value);
  }

  getSingle() {
    this._brigada.getSingle(this.data.id).subscribe((res: AutoBrigada) => {
      this.form.patchValue({
        name: res.name,
      });
    });
  }

}
