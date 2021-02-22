import { TestBed } from '@angular/core/testing';

import { Rxjs6OverviewService } from './rxjs6-overview.service';

describe('Rxjs6OverviewService', () => {
    let service: Rxjs6OverviewService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6OverviewService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
