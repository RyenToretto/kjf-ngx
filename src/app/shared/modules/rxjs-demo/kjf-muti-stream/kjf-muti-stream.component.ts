import { Component, OnInit } from '@angular/core';

import { KjfRxjsService } from '../services/kjf-rxjs/kjf-rxjs.service';

@Component({
    selector: 'kjf-muti-stream',
    templateUrl: './kjf-muti-stream.component.html',
    styleUrls: ['./kjf-muti-stream.component.scss'],
})
export class KjfMutiStreamComponent implements OnInit {

    constructor(public kjfRxjsService: KjfRxjsService) {}

    ngOnInit(): void {}
}
