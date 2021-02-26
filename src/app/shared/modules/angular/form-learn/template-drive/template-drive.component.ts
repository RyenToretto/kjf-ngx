import {
    Component
} from '@angular/core';

import { TemplateDriveService } from './services/template-drive.service';

@Component({
    selector: 'template-drive',
    templateUrl: './template-drive.component.html',
    styleUrls: ['./template-drive.component.scss']
})
export class TemplateDriveComponent {
    testName = '';

    testPhone = '';

    constructor(public templateDriveService: TemplateDriveService) {}

    handleTestPhoneForm(testPhoneForm) {
        console.log('testPhoneForm');
        console.log(testPhoneForm);
        console.log(testPhoneForm.value);
    }
}
