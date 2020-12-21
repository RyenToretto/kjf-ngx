import { Component, OnInit } from '@angular/core';

import { KjfRxjsService } from '../../services/kjf-rxjs/kjf-rxjs.service';

@Component({
    selector: 'kjf-two-pubsub-child',
    templateUrl: './kjf-two-pubsub-child.component.html',
    styleUrls: ['./kjf-two-pubsub-child.component.scss'],
})
export class KjfTwoPubsubChildComponent implements OnInit {
    secondValue: string;

    fa: '';

    constructor(public kjfRxjsService: KjfRxjsService) {}

    ngOnInit(): void {}

    fabu() {
        // 发布
        this.kjfRxjsService.subject.subscribe();
        this.kjfRxjsService.subject.next(this.fa);
    }

    // 手动取消订阅,取消之后两个组件之间不会再进行通信
    cancle() {
        this.kjfRxjsService.subject.unsubscribe();
    }
}
