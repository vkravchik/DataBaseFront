import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoSaleBuy} from "../../model/AutoSaleBuy";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {SaleBuyService} from "../../services/sale-buy.service";
import {AutoBrigada} from "../../model/AutoBrigada";
import {AddSaleBuyComponent} from "../../dialogs/add/add-sale-buy/add-sale-buy.component";
import {EditSaleBuyComponent} from "../../dialogs/edit/edit-sale-buy/edit-sale-buy.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-sale-buy',
  templateUrl: './sale-buy.component.html',
  styleUrls: ['./sale-buy.component.css']
})
export class SaleBuyComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Category', 'Marka', 'Date', 'saleBuy', 'Price', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<any>();

  constructor(private _saleBuy: SaleBuyService,
              private _dialog: DialogService,
              private router: Router,
              private datepipe: DatePipe,
              private toastr: ToastrService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAll();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll() {
    this._saleBuy.getAll().subscribe((res: AutoSaleBuy[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddSaleBuyComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._saleBuy.add(this._dialog.dialogData).subscribe(
          (res: AutoSaleBuy) => {
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
    const dialogRef = this.dialog.open(EditSaleBuyComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._saleBuy.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoSaleBuy) => {
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
    this._saleBuy.delete(id).subscribe(
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
