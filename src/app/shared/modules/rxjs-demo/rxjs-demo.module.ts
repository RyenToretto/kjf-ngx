import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KjfRxjsSimpleComponent } from './kjf-rxjs-simple/kjf-rxjs-simple.component';

import { RxjsDemoComponent } from './rxjs-demo.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'rxjs_demo' },
            { path: 'rxjs_demo', component: RxjsDemoComponent }
        ])
    ],
    exports: [ RxjsDemoComponent ],
    declarations: [
        RxjsDemoComponent,

        KjfRxjsSimpleComponent,
    ],
    entryComponents: [
        RxjsDemoComponent,
    ],
})
export class RxjsDemoModule {
}

