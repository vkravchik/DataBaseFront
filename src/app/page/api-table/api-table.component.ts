import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.css']
})
export class ApiTableComponent implements OnInit {
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<any>();

  constructor(private api: ApiServiceService) {
  }

  ngOnInit() {
    this.api.getAll().subscribe(res => {
      this.displayedColumns = Object.keys(res[0]);
      this.displayedColumns.push('actions');
      this.dataSource.data = res;

    });
  }

}
