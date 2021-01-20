import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { KjfRxjsService } from '../services/kjf-rxjs/kjf-rxjs.service';

@Component({
    selector: 'kjf-rxjs-pubsub',
    templateUrl: './kjf-rxjs-pubsub.component.html',
    styleUrls: ['./kjf-rxjs-pubsub.component.scss'],
})
export class KjfRxjsPubsubComponent implements OnInit {

    constructor(public kjfRxjsService: KjfRxjsService) {}

    ngOnInit(): void {}
}
