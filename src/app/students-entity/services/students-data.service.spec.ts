import { TestBed, inject } from '@angular/core/testing';

import { StudentsDataService } from './students-data.service';

describe('StudentsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsDataService]
    });
  });

  it('should ...', inject([StudentsDataService], (service: StudentsDataService) => {
    expect(service).toBeTruthy();
  }));
});
