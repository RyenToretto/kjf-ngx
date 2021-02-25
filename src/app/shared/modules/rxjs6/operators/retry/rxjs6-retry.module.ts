import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared.module';

import { Rxjs6RetryComponent } from './rxjs6-retry.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6RetryComponent },
        ])
    ],
    exports: [ Rxjs6RetryComponent ],
    declarations: [
        Rxjs6RetryComponent
    ],
    entryComponents: [
        Rxjs6RetryComponent,
    ],
})
export class Rxjs6RetryModule {
}

