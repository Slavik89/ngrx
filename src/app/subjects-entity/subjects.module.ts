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

@NgModule({
  imports: [  
    CommonModule,  
    SubjectsRoutingModule,
    StoreModule.provideStore({ navReducer }),
  ],
  declarations: [
    SubjectsContainerComponent,
    SubjectsTableComponent,
    SubjectDetailComponent
  ],
  providers: [
    SubjectsDataService
  ],  
})

export class SubjectsModule { }

