import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";
import {UserComponent} from './page/user/user.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {EditUserComponent} from './dialogs/edit/edit-user/edit-user.component';
import {AutoComponent} from './page/auto/auto.component';
import {BrigadaComponent} from './page/brigada/brigada.component';
import {BrigadirComponent} from './page/brigadir/brigadir.component';
import {CategoryComponent} from "./page/category/category.component";
import {CategoryPersonalComponent} from './page/category-personal/category-personal.component';
import {GroupComponent} from './page/group/group.component';
import {DriversComponent} from './page/drivers/drivers.component';
import {HardRouteComponent} from './page/hard-route/hard-route.component';
import {InfrastructComponent} from './page/infrastruct/infrastruct.component';
import {MarkaComponent} from './page/marka/marka.component';
import {PropComponent} from "./page/prop/prop.component";
import {PersonalComponent} from './page/personal/personal.component';
import {ProblemComponent} from './page/problem/problem.component';
import {RepairComponent} from './page/repair/repair.component';
import {RouteComponent} from './page/route/route.component';
import {SaleBuyComponent} from './page/sale-buy/sale-buy.component';
import {StreetComponent} from './page/street/street.component';
import {EditCategoryComponent} from './dialogs/edit/edit-category/edit-category.component';
import {AddUserComponent} from './dialogs/add/add-user/add-user.component';
import {AddDriverComponent} from './dialogs/add/add-driver/add-driver.component';
import {EditDriverComponent} from './dialogs/edit/edit-driver/edit-driver.component';
import {AddCategoryComponent} from './dialogs/add/add-category/add-category.component';
import {AddMarkaComponent} from './dialogs/add/add-marka/add-marka.component';
import {EditMarkaComponent} from './dialogs/edit/edit-marka/edit-marka.component';
import {AddAutoComponent} from './dialogs/add/add-auto/add-auto.component';
import {EditAutoComponent} from './dialogs/edit/edit-auto/edit-auto.component';
import {AddBrigadaComponent} from './dialogs/add/add-brigada/add-brigada.component';
import {EditBrigadaComponent} from './dialogs/edit/edit-brigada/edit-brigada.component';
import {AddBrigadirComponent} from './dialogs/add/add-brigadir/add-brigadir.component';
import {EditBrigadirComponent} from './dialogs/edit/edit-brigadir/edit-brigadir.component';
import {AddCategoryPersonalComponent} from './dialogs/add/add-category-personal/add-category-personal.component';
import {EditCategoryPersonalComponent} from './dialogs/edit/edit-category-personal/edit-category-personal.component';
import {AddSaleBuyComponent} from './dialogs/add/add-sale-buy/add-sale-buy.component';
import {EditSaleBuyComponent} from './dialogs/edit/edit-sale-buy/edit-sale-buy.component';
import {DatePipe} from "@angular/common";
import {AddHarRouteComponent} from './dialogs/add/add-har-route/add-har-route.component';
import {EditHardRouteComponent} from './dialogs/edit/edit-hard-route/edit-hard-route.component';
import {AddInfrastructComponent} from './dialogs/add/add-infrastruct/add-infrastruct.component';
import {EditInfrastructComponent} from './dialogs/edit/edit-infrastruct/edit-infrastruct.component';
import {AddPersonalComponent} from './dialogs/add/add-personal/add-personal.component';
import {EditPersonalComponent} from './dialogs/edit/edit-personal/edit-personal.component';
import {AddRepairComponent} from './dialogs/add/add-repair/add-repair.component';
import {EditRepairComponent} from './dialogs/edit/edit-repair/edit-repair.component';
import {EditProblemComponent} from './dialogs/edit/edit-problem/edit-problem.component';
import {AddProblemComponent} from './dialogs/add/add-problem/add-problem.component';
import {AddGroupComponent} from './dialogs/add/add-group/add-group.component';
import {EditGroupComponent} from './dialogs/edit/edit-group/edit-group.component';
import {EditStreetComponent} from './dialogs/edit/edit-street/edit-street.component';
import {AddStreetComponent} from './dialogs/add/add-street/add-street.component';
import {AddRouteComponent} from './dialogs/add/add-route/add-route.component';
import {EditRouteComponent} from "./dialogs/edit/edit-route/edit-route.component";
import {DialogsStreetComponent} from './dialogs/dialogs-street/dialogs-street.component';
import {ApiTableComponent} from './page/api-table/api-table.component';
import {DialogsRouteComponent} from './dialogs/dialogs-route/dialogs-route.component';
import {Query1Component} from './query/query1/query1.component';
import {Query2Component} from './query/query2/query2.component';
import {Q2dComponent} from './query/query2/q2d/q2d.component';
import {Query3Component} from './query/query3/query3.component';
import {Query10Component} from './query/query10/query10.component';
import {Q10dComponent} from './query/query10/q10d/q10d.component';
import { Query4Component } from './query/query4/query4.component';
import { Query6Component } from './query/query6/query6.component';
import { Q6dComponent } from './query/query6/q6d/q6d.component';
import { Query7Component } from './query/query7/query7.component';
import { Query8Component } from './query/query8/query8.component';
import { Q8dComponent } from './query/query8/q8d/q8d.component';
import { Query9Component } from './query/query9/query9.component';

const appRoutes: Routes = [
  {path: '', component: UserComponent, data: {title: 'User'}},
  {path: 'auto', component: AutoComponent},
  {path: 'brigada', component: BrigadaComponent},
  {path: 'brigadir', component: BrigadirComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'categoryPersonal', component: CategoryPersonalComponent},
  {path: 'drivers', component: DriversComponent},
  {path: 'group', component: GroupComponent},
  {path: 'hardRoute', component: HardRouteComponent},
  {path: 'infrastruct', component: InfrastructComponent},
  {path: 'marka', component: MarkaComponent},
  {path: 'prop', component: PropComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'problem', component: ProblemComponent},
  {path: 'repair', component: RepairComponent},
  {path: 'route', component: RouteComponent},
  {path: 'saleBuy', component: SaleBuyComponent},
  {path: 'street', component: StreetComponent},
  //QUERY
  {path: 'query1', component: Query1Component},
  {path: 'query2', component: Query2Component},
  {path: 'query3', component: Query3Component},
  {path: 'query4', component: Query4Component},
  {path: 'query6', component: Query6Component},
  {path: 'query7', component: Query7Component},
  {path: 'query8', component: Query8Component},
  {path: 'query9', component: Query9Component},
  {path: 'query10', component: Query10Component},

  // { path: 'street', component: ApiTableComponent },
  {path: '**', component: UserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EditUserComponent,
    AutoComponent,
    BrigadaComponent,
    BrigadirComponent,
    CategoryComponent,
    CategoryPersonalComponent,
    GroupComponent,
    DriversComponent,
    HardRouteComponent,
    InfrastructComponent,
    MarkaComponent,
    PropComponent,
    PersonalComponent,
    ProblemComponent,
    RepairComponent,
    RouteComponent,
    SaleBuyComponent,
    StreetComponent,
    EditCategoryComponent,
    AddUserComponent,
    AddDriverComponent,
    EditDriverComponent,
    AddCategoryComponent,
    AddMarkaComponent,
    EditMarkaComponent,
    AddAutoComponent,
    EditAutoComponent,
    AddBrigadaComponent,
    EditBrigadaComponent,
    AddBrigadirComponent,
    EditBrigadirComponent,
    AddCategoryPersonalComponent,
    EditCategoryPersonalComponent,
    AddSaleBuyComponent,
    EditSaleBuyComponent,
    AddHarRouteComponent,
    EditHardRouteComponent,
    AddInfrastructComponent,
    EditInfrastructComponent,
    AddPersonalComponent,
    EditPersonalComponent,
    AddRepairComponent,
    EditRepairComponent,
    EditProblemComponent,
    AddProblemComponent,
    AddGroupComponent,
    EditGroupComponent,
    EditStreetComponent,
    AddStreetComponent,
    AddRouteComponent,
    EditRouteComponent,
    DialogsStreetComponent,
    ApiTableComponent,
    DialogsRouteComponent,
    Query1Component,
    Query2Component,
    Q2dComponent,
    Query3Component,
    Query10Component,
    Q10dComponent,
    Query4Component,
    Query6Component,
    Q6dComponent,
    Query7Component,
    Query8Component,
    Q8dComponent,
    Query9Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CdkTableModule,

    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes), // Routes

    //  MATERIAL
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSortModule,
    MatSelectModule,
  ],
  providers: [MatDatepickerModule, DatePipe],
  entryComponents: [
    // ADD
    AddUserComponent,
    AddDriverComponent,
    AddCategoryComponent,
    AddMarkaComponent,
    AddAutoComponent,
    AddBrigadaComponent,
    AddBrigadirComponent,
    AddCategoryPersonalComponent,
    AddSaleBuyComponent,
    AddHarRouteComponent,
    AddInfrastructComponent,
    AddPersonalComponent,
    AddProblemComponent,
    AddRepairComponent,
    AddGroupComponent,
    AddStreetComponent,
    AddRouteComponent,
    // EDIT
    EditCategoryComponent,
    EditDriverComponent,
    EditUserComponent,
    EditMarkaComponent,
    EditAutoComponent,
    EditBrigadaComponent,
    EditBrigadirComponent,
    EditCategoryPersonalComponent,
    EditSaleBuyComponent,
    EditHardRouteComponent,
    EditInfrastructComponent,
    EditPersonalComponent,
    EditProblemComponent,
    EditRepairComponent,
    EditGroupComponent,
    EditStreetComponent,
    EditRouteComponent,
    // DIALOGS
    DialogsStreetComponent,
    DialogsRouteComponent,
    //  QUERY
    Q2dComponent,
    Q6dComponent,
    Q8dComponent,
    Q10dComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
