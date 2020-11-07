import { Component } from '@angular/core';

import {FrameLineService} from '../services/frame-line.service';

@Component({
    selector: 'rule',
    templateUrl: './rule.component.html'
})
export class RuleComponent {
    constructor(public frameLineService: FrameLineService) {}
}
