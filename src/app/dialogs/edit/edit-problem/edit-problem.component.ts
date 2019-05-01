import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutoPersonal} from "../../../model/AutoPersonal";
import {DialogService} from "../../../services/dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoProblem} from "../../../model/AutoProblem";
import {ProblemService} from "../../../services/problem.service";

@Component({
  selector: 'app-edit-problem',
  templateUrl: './edit-problem.component.html',
  styleUrls: ['./edit-problem.component.css']
})
export class EditProblemComponent implements OnInit {

  form: FormGroup;
  currentRow: AutoProblem;

  constructor(private _dialog: DialogService,
              private _problem: ProblemService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<EditProblemComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
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
    this._problem.getSingle(this.data.id).subscribe((res: AutoProblem) => {
      this.currentRow = res;
      this.form.patchValue({
        name: res.name,
      });
    });
  }

}
