import {Component, Input} from '@angular/core';
import {Student} from '../../../students-entity/models/student-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() students: Student[];

  constructor(private router: Router) {}

  onSelectStudent(student: Student) {
    this.router.navigate(['/student', student.id]);
  }
}
