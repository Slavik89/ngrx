import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StudentsContainerComponent } from './students-entity/components/students-container/students-container.component';
import { StudentsComponent } from './students-entity/components/students/students.component';
import {StudentsDataService} from './students-entity/services/students-data.service';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { HeaderComponent } from './core/header/header.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';
import {RouterModule} from "@angular/router";
import {routes} from "./router";

@NgModule({
  declarations: [
    AppComponent,
    StudentsContainerComponent,
    StudentsComponent,
    SideNavComponent,
    HeaderComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [StudentsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
