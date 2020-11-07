import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RuleComponent } from './rule.component';

import { RuleFrameLineChildrenComponent } from './frame-line-children/frame-line-children.component';
import { RuleFrameLineItemComponent } from './frame-line-children/frame-line-item/frame-line-item.component';
import {RuleFrameDetailComponent} from './frame-line-children/frame-line-item/frame-detail/frame-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'rule' },
            { path: 'rule', component: RuleComponent }
        ])
    ],
    exports: [ RuleComponent ],
    declarations: [
        RuleComponent,
        RuleFrameLineChildrenComponent,
        RuleFrameLineItemComponent,
        RuleFrameDetailComponent,
    ],
    entryComponents: [
        RuleComponent,
    ],
})
export class RuleModule {
}

