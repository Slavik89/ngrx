import { Injectable } from '@angular/core';
import { Subject } from '../models/subject-model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const Subjects = [  
  new Subject('sb1','Luterature', 'The science about letters'),
  new Subject('sb2','Biology', 'subject about life and living organisms')
];

@Injectable()
export class SubjectsDataService {

  constructor() { }

  /* fetchSubjects(): Observable<Subject[]> {
    return Observable.of(Subjects);
  }

  fetchSubjec(id: number | string): Observable<Subject[]> {
    const subject = Subjects.filter(sb => sb.id === id);
    return Observable.of(subject);
  } */

}
