import { TestBed } from '@angular/core/testing';

import {Rxjs6RetryService} from './rxjs6-retry.service';

describe('rxjs6-retry.service.ts', () => {
    let service: Rxjs6RetryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6RetryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
