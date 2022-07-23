import { TestBed } from '@angular/core/testing';

import { ImgExperienceService } from './img-experience.service';

describe('ImgExperienceService', () => {
  let service: ImgExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
