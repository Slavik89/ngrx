import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../models/student-model';

@Injectable()
export class StudentsDataService {

  private API_PATH = '../../../mock-server/mock-students.json';

  constructor(private http: Http) { }

  fetchStudents(): Observable<Student> {
    return this.http.get(`${this.API_PATH}`)
      .map(res => res.json());
  }

}
