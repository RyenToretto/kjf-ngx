import { TestBed } from '@angular/core/testing';

import { AngularOverviewService } from './angular-overview.service';

describe('AngularOverviewService', () => {
    let service: AngularOverviewService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AngularOverviewService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
