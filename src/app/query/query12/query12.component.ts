import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Auto} from "../../model/Auto";
import {QueryService} from "../../services/query.service";
import {Q12dComponent} from "./q12d/q12d.component";

@Component({
  selector: 'app-query12',
  templateUrl: './query12.component.html',
  styleUrls: ['./query12.component.css']
})
export class Query12Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Category', 'Marka', 'Date', 'saleBuy', 'Price'];
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
    const dialogRef = this.dialog.open(Q12dComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.executeQuery();
      }
    })
  }

  executeQuery() {
    this.query.query12(this.query.dialogsForm.status, this.query.dialogsForm.date_start, this.query.dialogsForm.date_finish).subscribe(res => {
      console.log(res);
      this.dataSource.data = res;
    });
  }

}
