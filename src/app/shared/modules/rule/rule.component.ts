import { Component } from '@angular/core';

import { RuleFlowChartService } from '../services/rule-flow-chart.service';

@Component({
    selector: 'rule',
    templateUrl: './rule.component.html'
})
export class RuleComponent {
    constructor(public ruleFlowChartService: RuleFlowChartService) {}
}
