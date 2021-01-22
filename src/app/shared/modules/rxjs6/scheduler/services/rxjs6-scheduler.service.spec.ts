import { TestBed } from '@angular/core/testing';

import { Rxjs6SchedulerService } from './rxjs6-scheduler.service';

describe('rxjs6-scheduler.service.ts', () => {
    let service: Rxjs6SchedulerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6SchedulerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
