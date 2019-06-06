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

import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { StudentsContainerComponent } from './students-entity/components/students-container/students-container.component';
import { StudentsComponent } from './students-entity/components/students/students.component';
import { StudentsDataService } from './students-entity/services/students-data.service';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { HeaderComponent } from './core/header/header.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';

import { routes } from './router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavItemComponent } from './shared/components/nav-item/nav-item.component';
import { EntityCardComponent } from './shared/components/entity-card/entity-card.component';
import { HomeComponent } from './home/home.component';
import { reducer } from './store/reducers/index';
import { StudentEffects } from './store/effects/studetsEffects';
import { TableComponent } from './shared/components/table/table.component';
import { StudentDetailComponent } from './students-entity/components/student-detail/student-detail.component';
import { StudentProfileComponent } from './students-entity/components/student-profile/student-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsContainerComponent,
    StudentsComponent,
    SideNavComponent,
    HeaderComponent,
    NotFoundPageComponent,
    NavItemComponent,
    EntityCardComponent,
    HomeComponent,
    TableComponent,
    StudentDetailComponent,
    StudentProfileComponent
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

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.run(StudentEffects),

    RouterModule.forRoot(routes),
  ],
  providers: [MdIconRegistry, StudentsDataService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
