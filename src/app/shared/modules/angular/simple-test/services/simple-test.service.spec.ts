import { TestBed } from '@angular/core/testing';

import { SimpleTestService } from './simple-test.service';

describe('simple-test.service.spec.ts', () => {
    let service: SimpleTestService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SimpleTestService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
