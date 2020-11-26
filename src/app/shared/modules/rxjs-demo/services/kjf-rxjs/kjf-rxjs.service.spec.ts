import { TestBed } from '@angular/core/testing';

import {KjfRxjsService} from './kjf-rxjs.service';

describe('HeroMessageService', () => {
    let service: KjfRxjsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(KjfRxjsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
