import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KjfRxjsService } from '../services/kjf-rxjs/kjf-rxjs.service';

@Component({
    selector: 'kjf-rxjs-simple',
    templateUrl: './kjf-rxjs-simple.component.html',
    styleUrls: ['./kjf-rxjs-simple.component.scss'],
})
export class KjfRxjsSimpleComponent implements OnInit {

    constructor(public kjfRxjsService: KjfRxjsService, private router: Router) {}

    ngOnInit(): void {}

    toChildComponent(path: string) {
        const navigation = this.router.url.split('/');
        navigation.pop();
        navigation.push(path);
        this.router.navigate(navigation);
    }
}
