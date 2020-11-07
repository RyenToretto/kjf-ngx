import { Component, Input, OnInit } from '@angular/core';
import { RuleItemType } from '../../entities';

@Component({
    selector: 'flow-rule-flow-chart',
    templateUrl: './rule-flow-chart.component.html'
})
export class RuleFlowChartComponent implements OnInit {
    @Input() flowChartStep: RuleItemType;

    constructor() {}

    ngOnInit(): void {}
}
