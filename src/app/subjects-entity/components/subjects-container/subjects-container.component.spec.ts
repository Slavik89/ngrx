import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsContainerComponent } from './subjects-container.component';

describe('SubjectsContainerComponent', () => {
  let component: SubjectsContainerComponent;
  let fixture: ComponentFixture<SubjectsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
