import { TestBed } from '@angular/core/testing';

import { Rxjs6ReplaySubjectService } from './rxjs6-replay-subject.service';

describe('rxjs6-replay-subject.service.ts', () => {
    let service: Rxjs6ReplaySubjectService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6ReplaySubjectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
