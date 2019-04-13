import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Driver} from "../../model/Driver";
import {DriverService} from "../../services/driver.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {DialogService} from "../../services/dialog.service";
import {EditDriverComponent} from "../../dialogs/edit/edit-driver/edit-driver.component";
import {AddDriverComponent} from "../../dialogs/add/add-driver/add-driver.component";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'SurName', 'Category', 'Marka', 'actions'];
  dataSource = new MatTableDataSource<Driver>();

  constructor(private _driver: DriverService,
              private _dialog: DialogService,
              private router: Router,
              private toastr: ToastrService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getAll();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll() {
    this._driver.getAll().subscribe((res: Driver[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddDriverComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._driver.add(this._dialog.dialogData).subscribe(
          (res: Driver) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<Driver>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditDriverComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._driver.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: Driver) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<Driver>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._driver.delete(id).subscribe(
      (res) => {
        this.dataSource.data = this.dataSource.data.filter(data => data.id !== id);
        this.toastr.success('Delete success', 'Success');
      },
      (error) => {
        this.toastr.error('Delete failed', 'Error');
      }
    )
  }

  whoIs() {
    const localLogin = localStorage.getItem('login');
    if(localLogin === 'driver') {
      return true;
    }
    return false;

  }

}
