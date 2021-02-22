import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'kjf-ngx/alert';
import { AlertDemoComponent } from './alert-demo.component';
import { BasicComponent } from './basic/basic.component';
import { CloseComponent } from './close/close.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlertModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'demo' },
            { path: 'demo', component: AlertDemoComponent}
        ])
    ],
    exports: [AlertDemoComponent],
    declarations: [
        AlertDemoComponent,
        BasicComponent,
        CloseComponent,
    ],
    entryComponents: [
        AlertDemoComponent,
    ],
})
export class AlertDemoModule {
}

