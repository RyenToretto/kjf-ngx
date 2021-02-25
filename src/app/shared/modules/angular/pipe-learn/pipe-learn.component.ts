import {
    Component
} from '@angular/core';
import {of} from 'rxjs';

import { PipeLearnService } from './services/pipe-learn.service';

@Component({
    selector: 'pipe-learn',
    templateUrl: './pipe-learn.component.html',
    styleUrls: ['./pipe-learn.component.scss']
})
export class PipeLearnComponent {
    testToday = new Date();

    object = {2: 'foo', 1: 'bar'};

    objObservable = of({2: 'foo', 1: 'bar'});

    constructor(public pipeLearnService: PipeLearnService) {}
}
