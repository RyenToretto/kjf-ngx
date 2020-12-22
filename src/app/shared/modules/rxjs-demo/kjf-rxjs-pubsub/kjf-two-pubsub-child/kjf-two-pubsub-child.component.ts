import { Component, OnInit } from '@angular/core';

import { KjfRxjsService } from '../../services/kjf-rxjs/kjf-rxjs.service';
import { KjfRxjsPubSubService } from '../../services/kjf-rxjs-pub-sub/kjf-rxjs-pub-sub.service';

import { PubSubKey } from '../../services/kjf-rxjs-pub-sub/constants';

@Component({
    selector: 'kjf-two-pubsub-child',
    templateUrl: './kjf-two-pubsub-child.component.html',
    styleUrls: ['./kjf-two-pubsub-child.component.scss'],
})
export class KjfTwoPubsubChildComponent implements OnInit {
    inputSource: string;

    constructor(
        public kjfRxjsService: KjfRxjsService,
        public rxjsPubSub: KjfRxjsPubSubService
    ) {}

    ngOnInit(): void {}

    handleInput(elementInputValue) {
        this.rxjsPubSub.publishPayload({ key: PubSubKey.input_change, value: elementInputValue}); // 发布
    }
}
