import { TestBed } from '@angular/core/testing';

import { FormLearnService } from './form-learn.service';

describe('form-learn.service.spec.ts', () => {
    let service: FormLearnService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FormLearnService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
