import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Auto} from "../../model/Auto";
import {QueryService} from "../../services/query.service";

@Component({
  selector: 'app-query9',
  templateUrl: './query9.component.html',
  styleUrls: ['./query9.component.css']
})
export class Query9Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Category', 'Marka'];
  dataSource = new MatTableDataSource<Auto>();

  constructor(private query: QueryService) {
    this.executeQuery();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  executeQuery() {
    this.query.query1().subscribe(res => {
      console.log(res);
      this.dataSource.data = res;
    });
  }

}
