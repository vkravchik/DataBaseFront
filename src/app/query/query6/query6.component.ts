import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Auto} from "../../model/Auto";
import {QueryService} from "../../services/query.service";
import {Q6dComponent} from "./q6d/q6d.component";

@Component({
  selector: 'app-query6',
  templateUrl: './query6.component.html',
  styleUrls: ['./query6.component.css']
})
export class Query6Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'ProblemName', 'Auto', 'Date', 'PersonalName', 'Price'];
  dataSource = new MatTableDataSource<Auto>();

  constructor(private query: QueryService,
              private dialog: MatDialog) {
    this.openDialog();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    const dialogRef = this.dialog.open(Q6dComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.executeQuery();
      }
    })
  }

  executeQuery() {
    if (this.query.dialogsForm.category !== null && (this.query.dialogsForm.marka === null && this.query.dialogsForm.auto === null)) {
      this.query.query6_1(this.query.dialogsForm.category).subscribe(res => {
        console.log(res);
        this.dataSource.data = res;
      });
    } else if (this.query.dialogsForm.marka !== null && (this.query.dialogsForm.category === null && this.query.dialogsForm.auto === null)) {
      this.query.query6_2(this.query.dialogsForm.marka).subscribe(res => {
        console.log(res);
        this.dataSource.data = res;
      })
    } else if (this.query.dialogsForm.auto !== null && (this.query.dialogsForm.category === null && this.query.dialogsForm.marka === null)) {
      this.query.query6_3(this.query.dialogsForm.auto).subscribe(res => {
        console.log(res);
        this.dataSource.data = res;
      })
    }
  }

}
