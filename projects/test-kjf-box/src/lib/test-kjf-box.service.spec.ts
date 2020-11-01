import { TestBed } from '@angular/core/testing';

import { TestKjfBoxService } from './test-kjf-box.service';

describe('TestKjfBoxService', () => {
  let service: TestKjfBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestKjfBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
