import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Auto} from "../../model/Auto";
import {QueryService} from "../../services/query.service";
import {Q11dComponent} from "./q11d/q11d.component";

@Component({
  selector: 'app-query11',
  templateUrl: './query11.component.html',
  styleUrls: ['./query11.component.css']
})
export class Query11Component implements OnInit {
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
    const dialogRef = this.dialog.open(Q11dComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.executeQuery();
      }
    })
  }

  executeQuery() {
    this.query.query11(this.query.dialogsForm.category, this.query.dialogsForm.detail).subscribe(res => {
      console.log(res);
      this.dataSource.data = res;
    });
  }

}
