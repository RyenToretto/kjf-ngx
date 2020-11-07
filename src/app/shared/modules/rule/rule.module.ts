import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RuleComponent } from './rule.component';

import { RuleFlowChartComponent } from './rule-flow-chart/rule-flow-chart.component';
import { RuleFlowChartStepComponent } from './rule-flow-chart/rule-flow-chart-step/rule-flow-chart-step.component';
import { RuleFlowChartDetailComponent } from './rule-flow-chart/rule-flow-chart-step/rule-flow-chart-detail/rule-flow-chart-detail.component';


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

        RuleFlowChartComponent,
        RuleFlowChartStepComponent,
        RuleFlowChartDetailComponent,
    ],
    entryComponents: [
        RuleComponent,
    ],
})
export class RuleModule {
}

