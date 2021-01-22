import { TestBed } from '@angular/core/testing';

import { Rxjs6SubscriptionService } from './rxjs6-subscription.service';

describe('rxjs6-subscription.service.ts', () => {
    let service: Rxjs6SubscriptionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Rxjs6SubscriptionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
