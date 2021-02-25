import {
    Component
} from '@angular/core';

import { FormLearnService } from './services/form-learn.service';

@Component({
    selector: 'form-learn',
    templateUrl: './form-learn.component.html',
    styleUrls: ['./form-learn.component.scss']
})
export class FormLearnComponent {
    constructor(public formLearnService: FormLearnService) {}
}
