import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoGroup} from "../../model/AutoGroup";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogService} from "../../services/dialog.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {ToastrService} from "ngx-toastr";
import {GroupService} from "../../services/group.service";
import {AddGroupComponent} from "../../dialogs/add/add-group/add-group.component";
import {EditGroupComponent} from "../../dialogs/edit/edit-group/edit-group.component";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  displayedColumns: string[] = ['id', 'PersonalName', 'DriversName', 'BrigadaName', 'BrigadirName', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<any>();

  constructor(private _group: GroupService,
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
    this._group.getAll().subscribe((res: AutoGroup[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddGroupComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._group.add(this._dialog.dialogData).subscribe(
          (res: AutoGroup) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoGroup>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditGroupComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._group.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoGroup) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoGroup>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._group.delete(id).subscribe(
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
