import { TestBed } from '@angular/core/testing';

import { Rxjs6SubjectsService } from './rxjs6-subjects.service';

describe('rxjs6-subjects.service.ts', () => {
    let service: Rxjs6SubjectsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6SubjectsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
