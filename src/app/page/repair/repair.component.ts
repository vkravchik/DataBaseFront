import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoRepair} from "../../model/AutoRepair";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {RepairService} from "../../services/repair.service";
import {AddRepairComponent} from "../../dialogs/add/add-repair/add-repair.component";
import {EditRepairComponent} from "../../dialogs/edit/edit-repair/edit-repair.component";

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'ProblemName', 'Auto', 'Date', 'PersonalName', 'Price', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _repair: RepairService,
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
    this._repair.getAll().subscribe((res: AutoRepair[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddRepairComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._repair.add(this._dialog.dialogData).subscribe(
          (res: AutoRepair) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoRepair>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditRepairComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._repair.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoRepair) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoRepair>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._repair.delete(id).subscribe(
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
