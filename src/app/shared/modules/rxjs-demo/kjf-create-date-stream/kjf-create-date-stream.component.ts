import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { KjfRxjsService } from '../services/kjf-rxjs/kjf-rxjs.service';
import {fromEvent, fromEventPattern} from 'rxjs';
import {filter, throttleTime} from 'rxjs/operators';

@Component({
    selector: 'kjf-create-date-stream',
    templateUrl: './kjf-create-date-stream.component.html',
    styleUrls: ['./kjf-create-date-stream.component.scss'],
})
export class KjfCreateDateStreamComponent implements OnInit, AfterViewInit {

    @ViewChild('elementUserInput') elementUserInput: ElementRef;

    constructor(public kjfRxjsService: KjfRxjsService) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        // const input$ = fromEvent(this.elementUserInput.nativeElement, 'input');

        const input$ = fromEventPattern(
            handler => this.elementUserInput.nativeElement.addEventListener('input', handler),
            handler => setInterval(handler, 1000)
        );

        input$.pipe(
            throttleTime(1000), // 1s 获取一次，节流
            filter((event: InputEvent) => (event.target as HTMLInputElement).value.length > 3)
        ).subscribe((e: InputEvent) => console.log((event.target as HTMLInputElement).value));
    }
}
