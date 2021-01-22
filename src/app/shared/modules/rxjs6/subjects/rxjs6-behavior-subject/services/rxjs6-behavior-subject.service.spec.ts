import { TestBed } from '@angular/core/testing';

import { Rxjs6BehaviorSubjectService } from './rxjs6-behavior-subject.service';

describe('rxjs6-behavior-subject.service.ts', () => {
    let service: Rxjs6BehaviorSubjectService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6BehaviorSubjectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
