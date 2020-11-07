import { Component, Input, OnInit } from '@angular/core';

import { RuleItemType } from '../../../../entities';


@Component({
    selector: 'flow-frame-detail',
    templateUrl: './frame-detail.component.html'
})
export class RuleFrameDetailComponent implements OnInit {
    @Input() flowChartStepDetail: RuleItemType;

    constructor() {}

    ngOnInit(): void {}
}
