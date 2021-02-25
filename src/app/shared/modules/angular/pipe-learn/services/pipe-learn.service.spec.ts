import { TestBed } from '@angular/core/testing';

import { PipeLearnService } from './pipe-learn.service';

describe('pipe-learn.service.spec.ts', () => {
    let service: PipeLearnService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PipeLearnService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
