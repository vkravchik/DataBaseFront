import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Auto} from "../../model/Auto";
import {QueryService} from "../../services/query.service";
import {Q10dComponent} from "./q10d/q10d.component";

@Component({
  selector: 'app-query10',
  templateUrl: './query10.component.html',
  styleUrls: ['./query10.component.css']
})
export class Query10Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'PointStart', 'PointFinish', 'DateStart', 'DateFinish', 'Category', 'Marka'];
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
    const dialogRef = this.dialog.open(Q10dComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.executeQuery();
      }
    })
  }

  executeQuery() {
    this.query.query10(this.query.dialogsForm.auto, this.query.dialogsForm.date).subscribe(res => {
      console.log(res);
      this.dataSource.data = res;
    });
  }
}
