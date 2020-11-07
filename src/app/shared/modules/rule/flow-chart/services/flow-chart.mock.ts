import { FlowChartStep } from '../entities';

export const mockFlowChartStep: FlowChartStep = {
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
