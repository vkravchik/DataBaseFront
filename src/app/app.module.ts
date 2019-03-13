import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";
import { UserComponent } from './page/user/user.component';
import { EditComponent } from './page/user/edit/edit.component';
import {RouterModule, Routes} from "@angular/router";

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
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
