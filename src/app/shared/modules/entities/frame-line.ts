export interface RuleItemType {
    is_root?: number;
    _id?: string | undefined;
    element_name?: string;
    element_type?: string;
    is_deleted?: boolean;
    directives?: object;
    next_step?: RuleItemType;
    next_steps?: RuleItemType[];
}
