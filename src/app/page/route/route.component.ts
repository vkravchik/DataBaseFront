import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoRoute} from "../../model/AutoRoute";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {RouteService} from "../../services/route.service";
import {DialogsRouteComponent} from "../../dialogs/dialogs-route/dialogs-route.component";

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Street', 'Auto', 'Count', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<any>();

  constructor(private _route: RouteService,
              private _dialog: DialogService,
              private router: Router,
              private toastr: ToastrService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAll();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll() {
    this._route.getAll().subscribe((res: AutoRoute[]) => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(DialogsRouteComponent, {
      data: {status: 1}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._route.add(this._dialog.dialogData).subscribe(
          (res: AutoRoute) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoRoute>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(DialogsRouteComponent, {
      data: {id: id, status: 0}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._route.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoRoute) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoRoute>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._route.delete(id).subscribe(
      (res) => {
        this.dataSource.data = this.dataSource.data.filter(data => data.id !== id);
        this.toastr.success('Delete success', 'Success');
      },
      (error) => {
        this.toastr.error('Delete failed', 'Error');
      }
    )
  }

}
