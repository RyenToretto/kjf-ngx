import { TestBed } from '@angular/core/testing';

import { KjfBoxService } from './kjf-box.service';

describe('KjfBoxService', () => {
  let service: KjfBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KjfBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
