import {Component, Input} from '@angular/core';

import {Student} from '../../../students-entity/models/student-model';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent  {
  @Input() student: Student;

  get fullName() {
    return `${this.student.name} ${this.student.surname}`;
  }

  get gradeBook() {
    return this.student.gradebook_id;
  }

  get photo() {
    return this.student.img;
  }

  get studyPlace() {
    return `${this.student.faculty_name} ${this.student.group_name}`;
}
}
