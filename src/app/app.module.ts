import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StudentsContainerComponent } from './students-entity/components/students-container/students-container.component';
import { StudentsComponent } from './students-entity/components/students/students.component';
import {StudentsDataService} from './students-entity/services/students-data.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsContainerComponent,
    StudentsComponent
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
