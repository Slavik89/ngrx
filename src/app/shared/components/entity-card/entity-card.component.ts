import {Component, Input} from '@angular/core';

import {Student} from '../../../students-entity/models/student-model';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent {
  @Input() student: Student;

  get fullName() {
    return `${this.student.name} ${this.student.surname}`;
  }

  get photo() {
    return this.student.img;
  }

  get faculty() {
    return this.student.faculty_name;
  }

  get group() {
    return this.student.group_name;
  }
}
