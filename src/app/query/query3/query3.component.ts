import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Auto} from "../../model/Auto";
import {QueryService} from "../../services/query.service";

@Component({
  selector: 'app-query3',
  templateUrl: './query3.component.html',
  styleUrls: ['./query3.component.css']
})
export class Query3Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'SurName', 'Category', 'Marka'];
  dataSource = new MatTableDataSource<Auto>();

  constructor(private query: QueryService) {
    this.executeQuery();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  executeQuery() {
    this.query.query3().subscribe(res => {
      console.log(res);
      this.dataSource.data = res;
    });
  }

}
