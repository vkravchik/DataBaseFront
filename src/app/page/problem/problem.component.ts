import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ProblemService} from "../../services/problem.service";
import {Router} from "@angular/router";
import {DialogService} from "../../services/dialog.service";
import {ToastrService} from "ngx-toastr";
import {AutoProblem} from "../../model/AutoProblem";
import {EditProblemComponent} from "../../dialogs/edit/edit-problem/edit-problem.component";
import {AddProblemComponent} from "../../dialogs/add/add-problem/add-problem.component";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'Name', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _problem: ProblemService,
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
    this._problem.getAll().subscribe((res: AutoProblem[]) => {
      this.dataSource.data = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddProblemComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._problem.add(this._dialog.dialogData).subscribe(
          (res: AutoProblem) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<AutoProblem>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditProblemComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 1) {
        this._problem.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: AutoProblem) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<AutoProblem>(this.dataSource.data)

          },
          (error) => {this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._problem.delete(id).subscribe(
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
