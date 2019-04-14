import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {BrigadirService} from "../../services/brigadir.service";
import {AutoBrigadir} from "../../model/AutoBrigadir";
import {EditBrigadirComponent} from "../../dialogs/edit/edit-brigadir/edit-brigadir.component";
import {AddBrigadirComponent} from "../../dialogs/add/add-brigadir/add-brigadir.component";

@Component({
  selector: 'app-brigadir',
  templateUrl: './brigadir.component.html',
  styleUrls: ['./brigadir.component.css']
})
export class BrigadirComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'Surname', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _brigadir: BrigadirService,
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
    this._brigadir.getAll().subscribe((res: AutoBrigadir[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddBrigadirComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._brigadir.add(this._dialog.dialogData).subscribe(
          (res: AutoBrigadir) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoBrigadir>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditBrigadirComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._brigadir.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoBrigadir) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoBrigadir>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._brigadir.delete(id).subscribe(
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
