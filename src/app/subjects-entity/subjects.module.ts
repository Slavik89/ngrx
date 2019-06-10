import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SubjectsContainerComponent } from './subjects-container.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsTableComponent } from './subjects-shared/subjects-table/subjects-table.component';
import { SubjectsDataService } from './services/subjects-data.service';

@NgModule({
  imports: [  
    CommonModule,  
    SubjectsRoutingModule,
  ],
  declarations: [
    SubjectsContainerComponent,
    SubjectsTableComponent
  ],
  providers: [
    SubjectsDataService
  ],  
})

export class SubjectsModule { }

