import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AutoCategory} from "../../../model/AutoCategory";
import {FakeBackService} from "../../../services/fake-back.service";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private back: FakeBackService) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.back.editCategory(this.data);
  }
}
