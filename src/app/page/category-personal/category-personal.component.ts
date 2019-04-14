import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AutoBrigada} from "../../model/AutoBrigada";
import {CategoryPersonalService} from "../../services/category-personal.service";
import {AutoCategoryPersonal} from "../../model/AutoCategoryPersonal";
import {EditCategoryPersonalComponent} from "../../dialogs/edit/edit-category-personal/edit-category-personal.component";
import {AddCategoryPersonalComponent} from "../../dialogs/add/add-category-personal/add-category-personal.component";

@Component({
  selector: 'app-category-personal',
  templateUrl: './category-personal.component.html',
  styleUrls: ['./category-personal.component.css']
})
export class CategoryPersonalComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _personal: CategoryPersonalService,
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
    this._personal.getAll().subscribe((res: AutoCategoryPersonal[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddCategoryPersonalComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._personal.add(this._dialog.dialogData).subscribe(
          (res: AutoBrigada) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoBrigada>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditCategoryPersonalComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._personal.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoBrigada) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoBrigada>(this.dataSource.data)

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
