import {
    Component,
    Output,
    EventEmitter
} from '@angular/core';

import { TestOutputEvent } from '../entries';

@Component({
    selector: 'simple-test-output',
    templateUrl: './output.component.html',
    styleUrls: ['./output.component.scss']
})
export class OutputComponent {
    outputCount = 0;

    @Output() childClick = new EventEmitter<TestOutputEvent>();

    constructor() {}

    testChildClick(_) {
        this.outputCount++;
        this.childClick.emit({ text: '来自子组件的消息' + this.outputCount });
    }
}
