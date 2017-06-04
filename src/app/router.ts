import { Routes } from '@angular/router';

import {StudentsContainerComponent} from './students-entity/components/students-container/students-container.component';
import {NotFoundPageComponent} from './core/not-found-page/not-found-page.component';



export const routes: Routes = [
  {
    path: '',
    component: NotFoundPageComponent
  },
  {
    path: 'student',
    component: StudentsContainerComponent
  },
  {
    path: 'student/:id',
    component: StudentsContainerComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

