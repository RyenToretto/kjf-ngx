import { Component, Input, OnInit } from '@angular/core';

import { RuleItemType } from '../../../entities';
import { RuleFlowChartService } from '../../../services/rule-flow-chart.service';

@Component({
    selector: 'flow-rule-flow-chart-step',
    templateUrl: './rule-flow-chart-step.component.html'
})
export class RuleFlowChartStepComponent implements OnInit {

    @Input() isLeafNode: Boolean;

    @Input() flowChartStep: RuleItemType;

    addFrameItemPopper = false;

    constructor(private ruleFlowChartService: RuleFlowChartService) {}

    ngOnInit(): void {}

    toggleFrameItemDetail(): void {
        this.ruleFlowChartService.toggleFrameItemOpen(this.flowChartStep);
    }

    toggleAddFrameItemPopper(): void {
        this.addFrameItemPopper = !this.addFrameItemPopper;
    }

    // 新并行元素
    addFrameItemIntoArray(parentFrameLine): void {
        this.ruleFlowChartService.addFrameLineIntoArray(parentFrameLine);
        this.addFrameItemPopper = false;
    }

    // 新 action
    addFrameItem(parentFrameLine): void {
        this.ruleFlowChartService.addFrameLineItem(parentFrameLine);
        this.addFrameItemPopper = false;
    }
}
