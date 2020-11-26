import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg/svg.service';

@Component({
    selector: 'kjf-svg-simple',
    templateUrl: './svg-simple.component.html',
    styleUrls: ['./svg-simple.component.scss'],
})
export class SvgSimpleComponent implements OnInit {

    constructor(public svgService: SvgService) {}

    ngOnInit(): void {}
}
