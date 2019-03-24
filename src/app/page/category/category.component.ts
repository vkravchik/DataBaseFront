import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FakeBackService} from "../../services/fake-back.service";
import {EditCategoryComponent} from "../../dialogs/edit/edit-category/edit-category.component";
import {MatDialog, MatDialogModule, MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Name', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private back: FakeBackService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource.data = this.back.getCategory();

    this.back.getCategory().subscribe(res => {
      this.dataSource.data = res;
    }).unsubscribe();

    console.log(this.dataSource.data);
  }

  startEdit(row, i) {
    console.log(row);
    const dialogRef = this.dialog.open(EditCategoryComponent, {
        data: {id: row.id, name: row.name}
      });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 1) {
        this.back.getData().subscribe(res => {
          const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
          this.dataSource.data[foundIndex] = res;
          console.log(this.dataSource.data);
        });
      }
    });
  }
}
