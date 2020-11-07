export interface FlowChartStep {
    is_root?: number;
    _id?: string | undefined;
    element_name?: string;
    element_type?: string;
    connector_name?: string;
    is_deleted?: boolean;
    directives?: object;
    next_step?: FlowChartStep;
    next_steps?: FlowChartStep[];
}
