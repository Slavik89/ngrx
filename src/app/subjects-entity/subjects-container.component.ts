import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from '../subjects-entity/models/subject-model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-subjects-container',
  templateUrl: './subjects-container.component.html',
  styleUrls: ['./subjects-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectsContainerComponent implements OnInit { 

  subjects$: Observable<Subject[]>;

  constructor() { }

  ngOnInit() {
  }

}
