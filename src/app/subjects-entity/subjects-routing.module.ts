import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsContainerComponent } from './components/subjects-container/subjects-container.component';

export const routes: Routes = [    
    {
      path: '',
      component: SubjectsContainerComponent
    },
    /* {
      path: 'student/:id',
      component: StudentDetailComponent
    }, */      
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SubjectsRoutingModule { }
