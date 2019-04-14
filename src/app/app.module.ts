import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
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
import { AddCategoryPersonalComponent } from './dialogs/add/add-category-personal/add-category-personal.component';
import { EditCategoryPersonalComponent } from './dialogs/edit/edit-category-personal/edit-category-personal.component';

const appRoutes: Routes = [
  { path: '', component: UserComponent, data: {title: 'User'} },
  { path: 'auto', component: AutoComponent },
  { path: 'brigada', component: BrigadaComponent },
  { path: 'brigadir', component: BrigadirComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'categoryPersonal', component: CategoryPersonalComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'group', component: GroupComponent },
  { path: 'hardRoute', component: HardRouteComponent },
  { path: 'infrastruct', component: InfrastructComponent },
  { path: 'marka', component: MarkaComponent },
  { path: 'prop', component: PropComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'problem', component: ProblemComponent },
  { path: 'repair', component: RepairComponent },
  { path: 'route', component: RouteComponent },
  { path: 'saleBuy', component: SaleBuyComponent },
  { path: 'street', component: StreetComponent },
  { path: '**', component: UserComponent },
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
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatSortModule,
    MatSelectModule,
  ],
  providers: [],
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
    // EDIT
    EditCategoryComponent,
    EditDriverComponent,
    EditUserComponent,
    EditMarkaComponent,
    EditAutoComponent,
    EditBrigadaComponent,
    EditBrigadirComponent,
    EditCategoryPersonalComponent,
    // DELETE
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
