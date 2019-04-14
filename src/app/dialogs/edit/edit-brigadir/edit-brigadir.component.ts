import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogService} from "../../../services/dialog.service";
import {BrigadirService} from "../../../services/brigadir.service";
import {AutoBrigadir} from "../../../model/AutoBrigadir";

@Component({
  selector: 'app-edit-brigadir',
  templateUrl: './edit-brigadir.component.html',
  styleUrls: ['./edit-brigadir.component.css']
})
export class EditBrigadirComponent implements OnInit {

  form: FormGroup;
  currentRow: AutoBrigadir;

  constructor(private dialogRef: MatDialogRef<EditBrigadirComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private _dialog: DialogService,
              private _brigadir: BrigadirService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });

    this.getSingle();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.form.value.id = this.data.id;
    this._dialog.dialogUpdate(this.form.value);
  }

  getSingle() {
    this._brigadir.getSingle(this.data.id).subscribe((res: AutoBrigadir) => {
      this.form.patchValue({
        name: res.name,
        surname: res.surname,
      });
    });
  }

}
