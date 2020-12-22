import { Component, OnInit } from '@angular/core';

import { KjfRxjsService } from '../../services/kjf-rxjs/kjf-rxjs.service';
import { KjfRxjsPubSubService } from '../../services/kjf-rxjs-pub-sub/kjf-rxjs-pub-sub.service';

import { PubSubPayload } from '../../services/kjf-rxjs-pub-sub/entities';
import { PubSubKey } from '../../services/kjf-rxjs-pub-sub/constants';

@Component({
    selector: 'kjf-one-pubsub-child',
    templateUrl: './kjf-one-pubsub-child.component.html',
    styleUrls: ['./kjf-one-pubsub-child.component.scss'],
})
export class KjfOnePubsubChildComponent implements OnInit {
    message: any = '';

    constructor(
        public kjfRxjsService: KjfRxjsService,
        public rxjsPubSub: KjfRxjsPubSubService
    ) {}

    ngOnInit() {
        this.rxjsPubSub.pubSubSubject$.subscribe((payload: PubSubPayload) => {
            if (payload.key === PubSubKey.input_change) {
                this.message = payload.value;
            }
        });
    }
}
