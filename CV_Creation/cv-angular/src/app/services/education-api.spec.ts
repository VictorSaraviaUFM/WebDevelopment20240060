import { TestBed } from '@angular/core/testing';

import { EducationApi } from './education-api';

describe('EducationApi', () => {
  let service: EducationApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
