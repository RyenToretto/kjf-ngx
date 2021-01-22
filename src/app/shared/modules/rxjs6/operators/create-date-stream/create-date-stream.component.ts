import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { fromEvent, fromEventPattern } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';

import {Rxjs6OperatorsService} from '../services/rxjs6-operators.service';

@Component({
    selector: 'create-date-stream',
    templateUrl: './create-date-stream.component.html',
    styleUrls: ['./create-date-stream.component.scss'],
})
export class CreateDateStreamComponent implements OnInit, AfterViewInit {

    @ViewChild('elementUserInput') elementUserInput: ElementRef;

    constructor(public rxjs6OperatorsService: Rxjs6OperatorsService) {}

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
