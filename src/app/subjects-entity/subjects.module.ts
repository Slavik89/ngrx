import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SubjectsContainerComponent } from './subjects-container.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsTableComponent } from './subjects-shared/subjects-table/subjects-table.component';
import { SubjectsDataService } from './services/subjects-data.service';
import { SubjectDetailComponent } from './components/subject-detail/subject-detail.component';

import { StoreModule } from '@ngrx/store';
import { navReducer } from './reducers/details-nav.reducer';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { EffectsModule } from '@ngrx/effects';
import { SubjectsEffects } from './effects/subjects.effects';

import {
  MdButtonModule, MdCardModule,
  MdIconModule, MdIconRegistry, MdLineModule, MdListModule, 
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [  
    CommonModule,  
    SubjectsRoutingModule,
    StoreModule.provideStore({ navReducer }),
    MdToolbarModule,
    MdIconModule,
    MdLineModule,
    MdListModule,
    MdButtonModule,
    MdCardModule,

    EffectsModule.run(SubjectsEffects),
  ],
  declarations: [
    SubjectsContainerComponent,
    SubjectsTableComponent,
    SubjectDetailComponent,
    SubjectsComponent
  ],
  providers: [
    SubjectsDataService
  ],  
})

export class SubjectsModule { }

