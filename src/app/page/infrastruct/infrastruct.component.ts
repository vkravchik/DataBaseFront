import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoInfrastruct} from "../../model/AutoInfrastruct";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {InfrastructService} from "../../services/infrastruct.service";
import {AddInfrastructComponent} from "../../dialogs/add/add-infrastruct/add-infrastruct.component";
import {EditInfrastructComponent} from "../../dialogs/edit/edit-infrastruct/edit-infrastruct.component";

@Component({
  selector: 'app-infrastruct',
  templateUrl: './infrastruct.component.html',
  styleUrls: ['./infrastruct.component.css']
})
export class InfrastructComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'Street', 'Category', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _infrastruct: InfrastructService,
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
    this._infrastruct.getAll().subscribe((res: AutoInfrastruct[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddInfrastructComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._infrastruct.add(this._dialog.dialogData).subscribe(
          (res: AutoInfrastruct) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoInfrastruct>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditInfrastructComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._infrastruct.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoInfrastruct) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoInfrastruct>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._infrastruct.delete(id).subscribe(
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
