import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoHardRoute} from "../../model/AutoHardRoute";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HardRouteService} from "../../services/hard-route.service";
import {EditHardRouteComponent} from "../../dialogs/edit/edit-hard-route/edit-hard-route.component";
import {AddHarRouteComponent} from "../../dialogs/add/add-har-route/add-har-route.component";

@Component({
  selector: 'app-hard-route',
  templateUrl: './hard-route.component.html',
  styleUrls: ['./hard-route.component.css']
})
export class HardRouteComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'PointStart', 'PointFinish', 'DateStart', 'DateFinish', 'Category', 'Marka', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _hardRoute: HardRouteService,
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
    this._hardRoute.getAll().subscribe((res: AutoHardRoute[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddHarRouteComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._hardRoute.add(this._dialog.dialogData).subscribe(
          (res: AutoHardRoute) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoHardRoute>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditHardRouteComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._hardRoute.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoHardRoute) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoHardRoute>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._hardRoute.delete(id).subscribe(
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
