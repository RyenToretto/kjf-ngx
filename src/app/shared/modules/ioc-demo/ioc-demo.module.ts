import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IocDemoComponent } from './ioc-demo.component';

import { ClassInjectComponent } from './class-inject/class-inject.component';
import { LimitInjectComponent } from './limit-inject/limit-inject.component';
import { InjectDesComponent } from './inject-des/inject-des.component';

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
        ClassInjectComponent,
        LimitInjectComponent,
        InjectDesComponent,
    ],
    entryComponents: [
        IocDemoComponent,
    ],
})
export class IocDemoModule {
}

