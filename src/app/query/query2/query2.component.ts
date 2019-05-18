import {Component, OnInit, ViewChild} from '@angular/core';
import {QueryService} from "../../services/query.service";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Q2dComponent} from "./q2d/q2d.component";
import {Auto} from "../../model/Auto";

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'SurName', 'Category', 'Marka'];
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
    const dialogRef = this.dialog.open(Q2dComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this.executeQuery();
      }
    })
  }

  executeQuery() {
    if(this.query.dialogsForm.auto !== null) {
      this.query.query2_2(this.query.dialogsForm.auto).subscribe(res => {
        console.log(res);
        this.dataSource.data = res;
      });
    } else {
      this.query.query2_1().subscribe(res => {
        console.log(res);
        this.dataSource.data = res;
      })
    }
  }
}
