import { Component, OnInit } from '@angular/core';

import { KjfRxjsService } from '../../services/kjf-rxjs/kjf-rxjs.service';

@Component({
    selector: 'kjf-one-pubsub-child',
    templateUrl: './kjf-one-pubsub-child.component.html',
    styleUrls: ['./kjf-one-pubsub-child.component.scss'],
})
export class KjfOnePubsubChildComponent implements OnInit {
    message: any;
    constructor(public kjfRxjsService: KjfRxjsService) {}

    ngOnInit() {
        this.kjfRxjsService.subject.subscribe(result => {
            this.message = result;
        });
    }
}
