import { TestBed } from '@angular/core/testing';

import {Rxjs6CombineLatestService} from './rxjs6-combine-latest.service';

describe('rxjs6-retry.service.ts', () => {
    let service: Rxjs6CombineLatestService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6CombineLatestService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
