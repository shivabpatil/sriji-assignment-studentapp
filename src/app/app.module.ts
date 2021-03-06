import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { StudentService } from "./services/student.service";
import { StudentsListResolverService } from "./services/students-list-resolver.service";
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

import { DeleteStudentComponent } from './delete-student/delete-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    StudentDetailComponent,
    EditStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ StudentService,StudentsListResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
