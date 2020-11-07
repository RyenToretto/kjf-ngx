import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RuleComponent } from './rule.component';

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
    ],
    entryComponents: [
        RuleComponent,
    ],
})
export class RuleModule {
}

