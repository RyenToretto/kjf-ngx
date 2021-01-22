import { Component, OnInit } from '@angular/core';

import { RxjsPubSubService } from '../services/rxjs-pub-sub/rxjs-pub-sub.service';

import { PubSubKey } from '../services/rxjs-pub-sub/constants';

@Component({
    selector: 'two-pubsub-child',
    templateUrl: './two-pubsub-child.component.html',
    styleUrls: ['./two-pubsub-child.component.scss'],
})
export class TwoPubsubChildComponent implements OnInit {
    inputSource: string;

    constructor(
        public rxjsPubSub: RxjsPubSubService
    ) {}

    ngOnInit(): void {}

    handleInput(elementInputValue) {
        this.rxjsPubSub.publishPayload({ key: PubSubKey.input_change, value: elementInputValue}); // 发布
    }
}
