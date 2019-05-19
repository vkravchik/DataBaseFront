import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Auto} from "../../model/Auto";
import {QueryService} from "../../services/query.service";
import {Q13dComponent} from "./q13d/q13d.component";

@Component({
  selector: 'app-query13',
  templateUrl: './query13.component.html',
  styleUrls: ['./query13.component.css']
})
export class Query13Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'PersonalName', 'DriversName', 'BrigadaName', 'BrigadirName'];

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
    const dialogRef = this.dialog.open(Q13dComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.executeQuery();
      }
    })
  }

  executeQuery() {
    this.query.query13(this.query.dialogsForm.brigadir).subscribe(res => {
      console.log(res);
      this.dataSource.data = res;
    });
  }

}
