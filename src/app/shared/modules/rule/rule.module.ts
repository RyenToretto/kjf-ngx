import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RuleComponent } from './rule.component';

import { RuleFlowChartComponent } from './flow-chart/flow-chart.component';
import { RuleFlowChartStepComponent } from './flow-chart/flow-chart-detail/flow-chart-step/flow-chart-step.component';
import { RuleFlowChartDetailComponent } from './flow-chart/flow-chart-detail/flow-chart-detail.component';

const COMPONENTS = [
    RuleFlowChartComponent,
    RuleFlowChartStepComponent,
    RuleFlowChartDetailComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'rule' },
            { path: 'rule', component: RuleComponent }
        ]),
    ],
    exports: [ RuleComponent ],
    declarations: [
        RuleComponent,
        ...COMPONENTS
    ],
    entryComponents: [
        RuleComponent,
    ],
})
export class RuleModule {
}

