import { Component, Input, OnInit } from '@angular/core';

import { RuleItemType } from '../../../entities';
import { FrameLineService } from '../../../services/frame-line.service';

@Component({
    selector: 'flow-frame-line-item',
    templateUrl: './frame-line-item.component.html'
})
export class RuleFrameLineItemComponent implements OnInit {

    @Input() isLeafNode: Boolean;

    @Input() flowChartStep: RuleItemType;

    addFrameItemPopper = false;

    constructor(private frameLineService: FrameLineService) {}

    ngOnInit(): void {}

    toggleFrameItemDetail(): void {
        this.frameLineService.toggleFrameItemOpen(this.flowChartStep);
    }

    toggleAddFrameItemPopper(): void {
        this.addFrameItemPopper = !this.addFrameItemPopper;
    }

    // 新并行元素
    addFrameItemIntoArray(parentFrameLine): void {
        this.frameLineService.addFrameLineIntoArray(parentFrameLine);
        this.addFrameItemPopper = false;
    }

    // 新 action
    addFrameItem(parentFrameLine): void {
        this.frameLineService.addFrameLineItem(parentFrameLine);
        this.addFrameItemPopper = false;
    }
}
