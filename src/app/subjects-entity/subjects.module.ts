import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SubjectsContainerComponent } from './components/subjects-container/subjects-container.component';
import { SubjectsRoutingModule } from './subjects-routing.module';

@NgModule({
  imports: [  
    CommonModule,  
    SubjectsRoutingModule,
  ],
  declarations: [
    SubjectsContainerComponent
  ],
  providers: [
  ],  
})

export class SubjectsModule { }

