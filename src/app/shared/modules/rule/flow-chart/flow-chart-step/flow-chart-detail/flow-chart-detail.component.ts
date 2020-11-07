import { Component, Input, OnInit } from '@angular/core';

import { FlowChartStep } from '../../flow-chart.types';

@Component({
    selector: 'flow-chart-detail',
    templateUrl: './flow-chart-detail.component.html'
})
export class RuleFlowChartDetailComponent implements OnInit {
    @Input() flowChartDetail: FlowChartStep;

    constructor() {}

    ngOnInit(): void {}
}
