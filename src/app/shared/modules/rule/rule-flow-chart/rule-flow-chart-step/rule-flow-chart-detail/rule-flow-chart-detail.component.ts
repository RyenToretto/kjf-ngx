import { Component, Input, OnInit } from '@angular/core';

import { RuleItemType } from '../../../../entities';


@Component({
    selector: 'flow-rule-flow-chart-detail',
    templateUrl: './rule-flow-chart-detail.component.html'
})
export class RuleFlowChartDetailComponent implements OnInit {
    @Input() flowChartDetail: RuleItemType;

    constructor() {}

    ngOnInit(): void {}
}
