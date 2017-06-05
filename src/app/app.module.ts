import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule, MdCardModule,
  MdIconModule, MdIconRegistry, MdLineModule, MdListModule, MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { StudentsContainerComponent } from './students-entity/components/students-container/students-container.component';
import { StudentsComponent } from './students-entity/components/students/students.component';
import {StudentsDataService} from './students-entity/services/students-data.service';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { HeaderComponent } from './core/header/header.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';

import {routes} from './router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavItemComponent } from './shared/components/nav-item/nav-item.component';
import { EntityCardComponent } from './shared/components/entity-card/entity-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsContainerComponent,
    StudentsComponent,
    SideNavComponent,
    HeaderComponent,
    NotFoundPageComponent,
    NavItemComponent,
    EntityCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdLineModule,
    MdListModule,
    MdButtonModule,
    MdCardModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [MdIconRegistry, StudentsDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
