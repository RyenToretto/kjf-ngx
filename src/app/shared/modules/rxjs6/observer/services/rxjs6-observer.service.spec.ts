import { TestBed } from '@angular/core/testing';

import { Rxjs6ObserverService } from './rxjs6-observer.service';

describe('rxjs6-observer.service.ts', () => {
    let service: Rxjs6ObserverService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6ObserverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
