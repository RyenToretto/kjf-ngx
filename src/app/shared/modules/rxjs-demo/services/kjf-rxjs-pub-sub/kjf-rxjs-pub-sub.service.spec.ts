import { TestBed } from '@angular/core/testing';

import {KjfRxjsPubSubService} from './kjf-rxjs.service';

describe('HeroMessageService', () => {
    let service: KjfRxjsPubSubService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(KjfRxjsPubSubService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
