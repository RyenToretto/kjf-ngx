import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PopoverModule } from 'kjf-ngx/popover';
import { PopoverDemoComponent } from './popover-demo.component';
import { BasicComponent } from './basic/basic.component';
import { CloseComponent } from './close/close.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PopoverModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo' },
      { path: 'demo', component: PopoverDemoComponent}
    ])
  ],
  exports: [PopoverDemoComponent],
  declarations: [
    PopoverDemoComponent,
    BasicComponent,
    CloseComponent,
  ],
  entryComponents: [
    PopoverDemoComponent,
  ],
})
export class PopoverDemoModule {
}

