import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IocDemoComponent } from './ioc-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'ioc_demo' },
      { path: 'ioc_demo', component: IocDemoComponent }
    ])
  ],
  exports: [ IocDemoComponent ],
  declarations: [
    IocDemoComponent,
  ],
  entryComponents: [
    IocDemoComponent,
  ],
})
export class IocDemoModule {
}

