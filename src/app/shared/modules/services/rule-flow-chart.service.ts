import { Injectable } from '@angular/core';
import { RuleItemType } from '../entities';

@Injectable({
    providedIn: 'root'
})
export class RuleFlowChartService {
    // flowChartStepData 缓存
    flowChartStep: RuleItemType = {
        _id: '1',
        element_name: '中国',
        element_type: 'trigger',
        connector_name: 'connector_1',
        is_deleted: false,
        is_root: 1,
        directives: {
            // 除了这里的数据不确定外，其余的数据均已确定
            displayName: '',
            description: '',
            type: 'select'
        },
        next_step: {
            _id: '22',
            element_name: '小峰峰',
            element_type: 'action',
            connector_name: 'connector_2',
            is_root: 0,
            directives: {
                displayName: '',
                description: '',
                type: 'input'
            },
            next_step: {
                _id: '333',
                element_name: '肉肉',
                element_type: 'action',
                connector_name: 'connector_3',
                is_root: 0,
                directives: {
                    displayName: '',
                    description: '',
                    type: 'button'
                },
                next_step: {
                    _id: '4444',
                    element_name: '乌龟',
                    element_type: 'action',
                    connector_name: 'connector_4',
                    is_root: 0,
                    directives: {
                        displayName: '',
                        description: '',
                        type: 'button'
                    },
                }
            }
        }
    };

    constructor() {}

    // 折叠/打开
    toggleFrameItemOpen(parentFrameLine) {
        parentFrameLine.directives.open = !parentFrameLine.directives.open;
    }

    // 新并行元素
    addFrameLineIntoArray(parentFrameLine) {
        const _id = 'keyNewBingXing' + Date.now();

        if (parentFrameLine.next_step) {
            parentFrameLine.next_step.push({
                is_root: 0,
                title: '存在数组 则新增',
                _id
            });
        } else {
            // 不存在数组 则创建数组
            parentFrameLine.next_step = [
                {
                    is_root: 0,
                    title: '不存在数组 则创建数组',
                    _id
                }
            ];
        }
    }

    // 新 item
    addFrameLineItem(parentFrameLine) {
        const _id = 'keyNewAction' + Date.now();
        parentFrameLine.next_step = [
            {
                is_root: 0,
                title: '新 action',
                _id,
                next_step: parentFrameLine.next_step
            }
        ];
    }

    // 清空缓存
    clearFrameLine() {}
}
