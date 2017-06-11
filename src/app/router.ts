import { Routes } from '@angular/router';

import {StudentsContainerComponent} from './students-entity/components/students-container/students-container.component';
import {NotFoundPageComponent} from './core/not-found-page/not-found-page.component';
import {HomeComponent} from './home/home.component';
import {StudentDetailComponent} from './students-entity/components/student-detail/student-detail.component';



export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'student',
    component: StudentsContainerComponent
  },
  {
    path: 'student/:id',
    component: StudentDetailComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

