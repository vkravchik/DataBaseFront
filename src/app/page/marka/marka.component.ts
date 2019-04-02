import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoCategory} from "../../model/AutoCategory";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MarkaService} from "../../services/marka.service";
import {AutoMarka} from "../../model/AutoMarka";
import {AddMarkaComponent} from "../../dialogs/add/add-marka/add-marka.component";
import {EditMarkaComponent} from "../../dialogs/edit/edit-marka/edit-marka.component";

@Component({
  selector: 'app-marka',
  templateUrl: './marka.component.html',
  styleUrls: ['./marka.component.css']
})
export class MarkaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _marka: MarkaService,
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
    this._marka.getAll().subscribe((res: AutoCategory[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddMarkaComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._marka.add(this._dialog.dialogData).subscribe(
          (res: AutoMarka) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoMarka>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditMarkaComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._marka.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoMarka) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoMarka>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._marka.delete(id).subscribe(
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
