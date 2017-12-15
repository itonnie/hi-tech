import { TestBed, inject } from '@angular/core/testing';

import { AppdataService } from './appdata.service';

describe('AppdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppdataService]
    });
  });

  it('should be created', inject([AppdataService], (service: AppdataService) => {
    expect(service).toBeTruthy();
  }));
});
