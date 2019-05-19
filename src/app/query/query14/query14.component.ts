import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Auto} from "../../model/Auto";
import {QueryService} from "../../services/query.service";
import {Q14dComponent} from "./q14d/q14d.component";

@Component({
  selector: 'app-query14',
  templateUrl: './query14.component.html',
  styleUrls: ['./query14.component.css']
})
export class Query14Component implements OnInit {
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
    const dialogRef = this.dialog.open(Q14dComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.executeQuery();
      }
    })
  }

  executeQuery() {
    if (this.query.dialogsForm.person !== null && this.query.dialogsForm.auto === null) {
      this.query.query14_1(this.query.dialogsForm.person, this.query.dialogsForm.date_start,
        this.query.dialogsForm.date_finish).subscribe(res => {
        console.log(res);
        this.dataSource.data = res;
      });
    } else if (this.query.dialogsForm.person !== null && this.query.dialogsForm.auto !== null) {
      this.query.query14_2(this.query.dialogsForm.person, this.query.dialogsForm.auto ,
        this.query.dialogsForm.date_start, this.query.dialogsForm.date_finish).subscribe(res => {
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
