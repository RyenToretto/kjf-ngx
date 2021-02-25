import {
    Component
} from '@angular/core';


import { PipeLearnService } from './services/pipe-learn.service';

@Component({
    selector: 'pipe-learn',
    templateUrl: './pipe-learn.component.html',
    styleUrls: ['./pipe-learn.component.scss']
})
export class PipeLearnComponent {
    constructor(public pipeLearnService: PipeLearnService) {}
}
