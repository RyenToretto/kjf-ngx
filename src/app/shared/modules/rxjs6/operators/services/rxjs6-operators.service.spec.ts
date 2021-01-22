import { TestBed } from '@angular/core/testing';

import { Rxjs6OperatorsService } from './rxjs6-operators.service';

describe('rxjs6-operators.service.ts', () => {
    let service: Rxjs6OperatorsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6OperatorsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
