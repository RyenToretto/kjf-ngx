import { ThyDialogSizes } from 'ngx-tethys';

import { Injectable } from '@angular/core';
import { UtilService } from '@worktile/ngx-styx';

import { RuleConfigComponent } from '../components/config/config.component';
import { RuleCopyComponent } from '../components/copy/copy.component';
import { RuleRenameComponent } from '../components/rename/rename.component';
import { RuleSaveTemplateComponent } from '../components/save-template/save-template.component';

@Injectable({ providedIn: 'root' })
export class RuleService {
    constructor(private util: UtilService) {}

    configRule() {
        this.util.dialog.open(RuleConfigComponent, {
            size: ThyDialogSizes.full
        });
    }

    copy() {
        this.util.dialog.open(RuleCopyComponent, {
            size: ThyDialogSizes.md
        });
    }

    rename() {
        this.util.dialog.open(RuleRenameComponent, {
            size: ThyDialogSizes.md
        });
    }

    saveAsTemplate() {
        this.util.dialog.open(RuleSaveTemplateComponent, {
            size: ThyDialogSizes.md
        });
    }
}
