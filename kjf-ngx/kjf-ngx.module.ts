import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'kjf-ngx/alert'; // 此处按照按需引入方式导入，my-lib对应我们的发布库名


@NgModule({
  imports: [ CommonModule ],
  exports: [AlertModule],
  providers: [],
})
export class KjfNgxModule {
    static forRoot(): ModuleWithProviders<KjfNgxModule> {
        return {
            ngModule: KjfNgxModule,
        };
    }
}
