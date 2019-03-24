import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSidenavModule, MatSortModule,
  MatTableModule, MatToolbarModule
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";
import { UserComponent } from './page/user/user.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import { EditUserComponent } from './dialogs/edit/edit-user/edit-user.component';
import { DeleteUserComponent } from './dialogs/delete/delete-user/delete-user.component';
import { AutoComponent } from './page/auto/auto.component';
import { BrigadaComponent } from './page/brigada/brigada.component';
import { BrigadirComponent } from './page/brigadir/brigadir.component';
import {CategoryComponent} from "./page/category/category.component";
import { CategoryPersonalComponent } from './page/category-personal/category-personal.component';
import { GroupComponent } from './page/group/group.component';
import { DriversComponent } from './page/drivers/drivers.component';
import { HardRouteComponent } from './page/hard-route/hard-route.component';
import { InfrastructComponent } from './page/infrastruct/infrastruct.component';
import { MarkaComponent } from './page/marka/marka.component';
import {PropComponent} from "./page/prop/prop.component";
import { PersonalComponent } from './page/personal/personal.component';
import { ProblemComponent } from './page/problem/problem.component';
import { RepairComponent } from './page/repair/repair.component';
import { RouteComponent } from './page/route/route.component';
import { SaleBuyComponent } from './page/sale-buy/sale-buy.component';
import { StreetComponent } from './page/street/street.component';
import { EditCategoryComponent } from './dialogs/edit/edit-category/edit-category.component';
import { AddUserComponent } from './dialogs/add/add-user/add-user.component';

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
    DeleteUserComponent,
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
  ],
  providers: [],
  entryComponents: [
    // ADD
    AddUserComponent,
    // EDIT
    EditCategoryComponent,
    EditUserComponent,
    // DELETE
    DeleteUserComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
