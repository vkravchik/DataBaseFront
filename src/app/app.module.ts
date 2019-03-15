import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";
import { UserComponent } from './page/user/user.component';
import { EditComponent } from './page/user/detail/edit.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'user/:id', component: EditComponent },
  { path: '**', component: UserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes) // Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
