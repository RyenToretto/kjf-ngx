import { Component, Input, OnInit } from '@angular/core';

import { FlowChartStep } from './entities';

@Component({
    selector: 'flow-chart',
    templateUrl: './flow-chart.component.html'
})
export class RuleFlowChartComponent implements OnInit {
    @Input() flowChartStep: FlowChartStep;

    constructor() {}

    ngOnInit(): void {}
}
