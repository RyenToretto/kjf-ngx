import { Component, Input, OnInit } from '@angular/core';

import { FlowChartService } from '../../services/flow-chart.service';
import { FlowChartStep } from '../../entities';


@Component({
    selector: 'flow-chart-step',
    templateUrl: './flow-chart-step.component.html'
})
export class RuleFlowChartStepComponent implements OnInit {

    @Input() isLeafNode: Boolean;

    @Input() flowChartStep: FlowChartStep;

    addFrameItemPopper = false;

    constructor(private flowChartService: FlowChartService) {}

    ngOnInit(): void {}

    toggleFrameItemDetail(): void {
        this.flowChartService.toggleFrameItemOpen(this.flowChartStep);
    }

    toggleAddFrameItemPopper(): void {
        this.addFrameItemPopper = !this.addFrameItemPopper;
    }

    // 新并行元素
    addFrameItemIntoArray(parentFrameLine): void {
        this.flowChartService.addFrameLineIntoArray(parentFrameLine);
        this.addFrameItemPopper = false;
    }

    // 新 action
    addFrameItem(parentFrameLine): void {
        this.flowChartService.addFrameLineItem(parentFrameLine);
        this.addFrameItemPopper = false;
    }
}
