import { Component, OnInit } from '@angular/core';

import { KjfRxjsService } from '../services/kjf-rxjs/kjf-rxjs.service';

@Component({
    selector: 'kjf-usual-operator',
    templateUrl: './kjf-usual-operator.component.html',
    styleUrls: ['./kjf-usual-operator.component.scss'],
})
export class KjfUsualOperatorComponent implements OnInit {

    constructor(public kjfRxjsService: KjfRxjsService) {}

    ngOnInit(): void {}
}
