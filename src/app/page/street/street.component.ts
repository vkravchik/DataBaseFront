import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoStreet} from "../../model/AutoStreet";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {StreetService} from "../../services/street.service";
import {AddStreetComponent} from "../../dialogs/add/add-street/add-street.component";
import {EditStreetComponent} from "../../dialogs/edit/edit-street/edit-street.component";

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {

  displayedColumns: string[] = ['id', 'StreetStart', 'StreetFinish', 'Intervall', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<any>();

  constructor(private _street: StreetService,
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
    this._street.getAll().subscribe((res: AutoStreet[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddStreetComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._street.add(this._dialog.dialogData).subscribe(
          (res: AutoStreet) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoStreet>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditStreetComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._street.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoStreet) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoStreet>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._street.delete(id).subscribe(
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
