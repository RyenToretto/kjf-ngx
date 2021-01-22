import { Component, OnInit } from '@angular/core';
import { Rxjs6OperatorsService } from '../services/rxjs6-operators.service';

@Component({
    selector: 'control-stream',
    templateUrl: './control-stream.component.html',
    styleUrls: ['./control-stream.component.scss'],
})
export class ControlStreamComponent implements OnInit {

    constructor(public rxjs6OperatorsService: Rxjs6OperatorsService) {}

    ngOnInit(): void {}
}
