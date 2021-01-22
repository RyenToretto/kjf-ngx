import { TestBed } from '@angular/core/testing';

import { Rxjs6SubjectService } from './rxjs6-subject.service';

describe('rxjs6-subject.service.ts', () => {
    let service: Rxjs6SubjectService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6SubjectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
