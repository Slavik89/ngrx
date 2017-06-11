import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {Student} from '../models/student-model';

const Students = [
  new Student('s1', 'John', 'Smith', '1234', 'IT1', 'IT'),
  new Student('s2', 'John', 'Smith', '1234', 'IT1', 'IT'),
  new Student('s3', 'John', 'Smith', '1234', 'IT1', 'IT'),
  new Student('s4', 'John', 'Smith', '1234', 'IT1', 'IT'),
];

@Injectable()
export class StudentsDataService {

  constructor() {
  }

  fetchStudents(): Observable<Student[]> {
    return Observable.of(Students);
  }

  fetchStudent(id: number | string): Observable<Student[]> {
    const student = Students.filter(stud => stud.id === id);
    return Observable.of(student);
  }

}
