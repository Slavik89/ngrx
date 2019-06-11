import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsContainerComponent } from './subjects-container.component';
import { SubjectDetailComponent } from './components/subject-detail/subject-detail.component';

export const routes: Routes = [    
    {
      path: '',
      component: SubjectsContainerComponent,
      children: [
        {
          path: ':detail',
          component: SubjectDetailComponent
        }, 
      ],
    },
          
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SubjectsRoutingModule { }
