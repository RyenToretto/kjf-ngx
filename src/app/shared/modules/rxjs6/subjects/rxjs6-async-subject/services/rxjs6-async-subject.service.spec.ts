import { TestBed } from '@angular/core/testing';

import { Rxjs6AsyncSubjectService } from './rxjs6-async-subject.service';

describe('rxjs6-replay-subject.service.ts', () => {
    let service: Rxjs6AsyncSubjectService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6AsyncSubjectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
