import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule, MatToolbarModule
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";
import { UserComponent } from './page/user/user.component';
import { EditComponent } from './page/user/detail/edit.component';
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

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'user/:id', component: EditComponent },

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
  { path: '**', component: UserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EditComponent,
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes) // Routes
  ],
  providers: [],
  entryComponents: [
    EditUserComponent,
    DeleteUserComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
