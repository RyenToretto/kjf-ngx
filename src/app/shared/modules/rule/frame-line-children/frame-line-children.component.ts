import { Component, Input, OnInit } from '@angular/core';
import { RuleItemType } from '../../entities';

@Component({
    selector: 'flow-frame-line-children',
    templateUrl: './frame-line-children.component.html'
})
export class RuleFrameLineChildrenComponent implements OnInit {
    @Input() flowChartStep: RuleItemType;

    constructor() {}

    ngOnInit(): void {}
}
