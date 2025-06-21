import { TestBed } from '@angular/core/testing';

import { StudentProfileDataService } from './student-profile-data.service';

describe('StudentProfileDataService', () => {
  let service: StudentProfileDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentProfileDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
