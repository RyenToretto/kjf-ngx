import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowChartService } from './flow-chart.service';

import { RuleFlowChartComponent } from './flow-chart.component';
import { RuleFlowChartStepComponent } from './flow-chart-step/flow-chart-step.component';
import { RuleFlowChartDetailComponent } from './flow-chart-step/flow-chart-detail/flow-chart-detail.component';


@NgModule({
  imports: [ CommonModule ],
  exports: [
      RuleFlowChartComponent,
      RuleFlowChartStepComponent,
      RuleFlowChartDetailComponent,
  ],
  declarations: [
      RuleFlowChartComponent,
      RuleFlowChartStepComponent,
      RuleFlowChartDetailComponent,
  ],
  providers: [
      FlowChartService
  ],
})
export class FlowChartModule {
}
