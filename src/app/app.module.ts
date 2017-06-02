import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StudentsComponent } from './students-entity/components/students/students.component';
import { StudentComponent } from './students-entity/components/student/student.component';
import {StudentsDataService} from './students-entity/services/students-data.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StudentsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
