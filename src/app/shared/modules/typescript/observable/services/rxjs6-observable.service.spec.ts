import { TestBed } from '@angular/core/testing';

import {Rxjs6ObservableService} from './rxjs6-observable.service';

describe('rxjs6-observable.service.ts', () => {
    let service: Rxjs6ObservableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6ObservableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
