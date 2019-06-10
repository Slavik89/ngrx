import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../models/subject-model';


@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.scss']
})
export class SubjectsTableComponent implements OnInit {
  @Input() subjects: Subject[];

  constructor() { }

  ngOnInit() {
  }

}
