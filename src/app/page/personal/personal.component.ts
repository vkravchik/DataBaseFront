import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AutoPersonal} from "../../model/AutoPersonal";
import {PersonalService} from "../../services/personal.service";
import {EditPersonalComponent} from "../../dialogs/edit/edit-personal/edit-personal.component";
import {AddPersonalComponent} from "../../dialogs/add/add-personal/add-personal.component";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'SurName', 'CategoryPersonalName', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _personal: PersonalService,
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
    this._personal.getAll().subscribe((res: AutoPersonal[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddPersonalComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._personal.add(this._dialog.dialogData).subscribe(
          (res: AutoPersonal) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoPersonal>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditPersonalComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._personal.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoPersonal) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoPersonal>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._personal.delete(id).subscribe(
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
