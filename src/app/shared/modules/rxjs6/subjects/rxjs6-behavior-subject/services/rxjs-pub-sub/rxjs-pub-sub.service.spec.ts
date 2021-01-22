import { TestBed } from '@angular/core/testing';

import { RxjsPubSubService } from './rxjs-pub-sub.service';

describe('rxjs-pub-sub.service.ts', () => {
    let service: RxjsPubSubService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RxjsPubSubService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
