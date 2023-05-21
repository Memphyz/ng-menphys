import { TestBed } from '@angular/core/testing';

import { MenphysService } from './menphys.service';

describe('MenphysService', () => {
  let service: MenphysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenphysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
