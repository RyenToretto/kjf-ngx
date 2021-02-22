import { TestBed } from '@angular/core/testing';

import { TypescriptOverviewService } from './typescript-overview.service';

describe('Typescript Overview Service', () => {
    let service: TypescriptOverviewService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TypescriptOverviewService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
