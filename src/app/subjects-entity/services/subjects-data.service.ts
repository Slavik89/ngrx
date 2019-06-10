import { Injectable } from '@angular/core';
import { Subject } from '../models/subject-model';
import { Observable } from 'rxjs/Observable';

const Subjects = [
  new Subject('Math'),
  new Subject('Chemisrty'),
  new Subject('Luterature'),
  new Subject('Biology')
];

@Injectable()
export class SubjectsDataService {

  constructor() { }

  fetchStudents(): Observable<Subject[]> {
    return Observable.of(Subjects);
  }

}
