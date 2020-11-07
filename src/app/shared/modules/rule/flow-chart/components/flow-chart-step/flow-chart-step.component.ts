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

    addFlowChartStepPopper = false;

    constructor(private flowChartService: FlowChartService) {}

    ngOnInit(): void {}

    toggleFlowChartDetail(): void {
        this.flowChartService.toggleFlowChartStepOpen(this.flowChartStep);
    }

    toggleAddFlowChartStepPopper(): void {
        this.addFlowChartStepPopper = !this.addFlowChartStepPopper;
    }

    // 新并行元素
    addFlowChartStepIntoArray(flowChartStep): void {
        this.flowChartService.addFlowChartStepIntoArray(flowChartStep);
        this.addFlowChartStepPopper = false;
    }

    // 新 action
    addFlowChartStep(flowChartStep): void {
        this.flowChartService.addFlowChartStepItem(flowChartStep);
        this.addFlowChartStepPopper = false;
    }
}
