import { Injectable } from '@angular/core';

import { FlowChartStep } from '../entities';

import { mockFlowChartStep } from './flow-chart.mock';

@Injectable({ providedIn: 'root' })
export class FlowChartService {
    flowChartStep: FlowChartStep = mockFlowChartStep;

    constructor() {}

    // 折叠/打开
    toggleFlowChartStepOpen(flowChartStep) {
        flowChartStep.directives.open = !flowChartStep.directives.open;
    }

    // 新 并行 元素
    addFlowChartStepIntoArray(flowChartStep) {
        const newFlowChartStep: FlowChartStep = {
            _id: 'front_end_id_' + Date.now(),
            element_name: '元素 element_name_new',
            element_type: '元素',
            connector_name: 'connector_new_element',
            is_root: 0,
            directives: {
                displayName: '',
                description: '',
                type: 'button'
            },
        };

        if (flowChartStep.next_step) { // 已经存在下一个，则插入
            // 1. 新元素 指向 下一个
            newFlowChartStep.next_step = flowChartStep.next_step;

            // 2. 当前元素 指向 新元素
            flowChartStep.next_step = newFlowChartStep;
        } else { // 不存在 则创建
            flowChartStep.next_step = newFlowChartStep;
        }
    }

    // 新 条件
    addFlowChartStepItem(flowChartStep) {
        const newFlowChartStep: FlowChartStep = {
            _id: 'front_end_id_' + Date.now(),
            element_name: '条件 element_name_new',
            element_type: '条件',
            connector_name: 'connector_new_tiao',
            is_root: 0,
            directives: {
                displayName: '',
                description: '',
                type: 'button'
            },
        };

        if (flowChartStep.next_step) { // 已经存在下一个，则插入
            // 1. 新条件 指向 下一个
            newFlowChartStep.next_step = flowChartStep.next_step;

            // 2. 当前元素 指向 新条件
            flowChartStep.next_step = newFlowChartStep;
        } else { // 不存在 则创建
            flowChartStep.next_step = newFlowChartStep;
        }
    }
}
