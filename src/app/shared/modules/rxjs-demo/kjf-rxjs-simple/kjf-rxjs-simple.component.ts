import { Component, OnInit } from '@angular/core';

import { KjfRxjsService } from '../services/kjf-rxjs/kjf-rxjs.service';

@Component({
    selector: 'kjf-rxjs-simple',
    templateUrl: './kjf-rxjs-simple.component.html',
    styleUrls: ['./kjf-rxjs-simple.component.scss'],
})
export class KjfRxjsSimpleComponent implements OnInit {

    constructor(public kjfRxjsService: KjfRxjsService) {}

    ngOnInit(): void {}
}
