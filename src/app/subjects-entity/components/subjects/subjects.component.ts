import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../models/subject-model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  @Input() subjects: Subject[];

  constructor() { }

  ngOnInit() {
  }

}
