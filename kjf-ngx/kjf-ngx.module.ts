import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'kjf-ngx/accordion'; // 此处按照按需引入方式导入，kjf-ngx对应我们的发布库名
import { AlertModule } from 'kjf-ngx/alert';


@NgModule({
  imports: [ CommonModule ],
  exports: [
      AccordionModule,
      AlertModule
  ],
  providers: [],
})
export class KjfNgxModule {
    static forRoot(): ModuleWithProviders<KjfNgxModule> {
        return {
            ngModule: KjfNgxModule,
        };
    }
}
