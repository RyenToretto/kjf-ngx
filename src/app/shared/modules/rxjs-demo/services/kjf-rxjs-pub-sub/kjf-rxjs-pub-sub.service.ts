import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PubSubPayload } from './entities';
import { PubSubKey } from './constants';

@Injectable({
    providedIn: 'root'
})
export class KjfRxjsPubSubService {
    public pubSubSubject$ = new BehaviorSubject<PubSubPayload>({ key: PubSubKey.init_pub_sub });

    constructor() {}

    publishPayload(payload: PubSubPayload): void {
        this.pubSubSubject$.next(payload);
    }
}
