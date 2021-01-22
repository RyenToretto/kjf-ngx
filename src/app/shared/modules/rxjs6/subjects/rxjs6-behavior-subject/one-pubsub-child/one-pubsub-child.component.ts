import { Component, OnInit } from '@angular/core';

import { RxjsPubSubService } from '../services/rxjs-pub-sub/rxjs-pub-sub.service';

import { PubSubPayload } from '../services/rxjs-pub-sub/entities';
import { PubSubKey } from '../services/rxjs-pub-sub/constants';

@Component({
    selector: 'one-pubsub-child',
    templateUrl: './one-pubsub-child.component.html',
    styleUrls: ['./one-pubsub-child.component.scss']
})
export class OnePubsubChildComponent implements OnInit {
    message: any = '';

    constructor(
        public rxjsPubSub: RxjsPubSubService
    ) {}

    ngOnInit() {
        this.rxjsPubSub.pubSubSubject$.subscribe((payload: PubSubPayload) => {
            if (payload.key === PubSubKey.input_change) {
                this.message = payload.value;
            }
        });
    }
}
