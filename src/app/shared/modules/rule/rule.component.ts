import { Component } from '@angular/core';

import {FlowChartService} from '../services/flow-chart.service';

@Component({
    selector: 'rule',
    templateUrl: './rule.component.html'
})
export class RuleComponent {
    constructor(public flowChartService: FlowChartService) {}
}
