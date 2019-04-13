import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoBrigada} from "../../model/AutoBrigada";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {BrigadaService} from "../../services/brigada.service";
import {AddBrigadaComponent} from "../../dialogs/add/add-brigada/add-brigada.component";
import {EditBrigadaComponent} from "../../dialogs/edit/edit-brigada/edit-brigada.component";

@Component({
  selector: 'app-brigada',
  templateUrl: './brigada.component.html',
  styleUrls: ['./brigada.component.css']
})
export class BrigadaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _brigada: BrigadaService,
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
    this._brigada.getAll().subscribe((res: AutoBrigada[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddBrigadaComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._brigada.add(this._dialog.dialogData).subscribe(
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
    const dialogRef = this.dialog.open(EditBrigadaComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._brigada.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoBrigada) => {
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
    this._brigada.delete(id).subscribe(
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
