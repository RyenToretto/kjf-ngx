import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RuleComponent } from './rule.component';

import { FlowChartModule } from './flow-chart/flow-chart.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'rule' },
            { path: 'rule', component: RuleComponent }
        ]),
        FlowChartModule
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

