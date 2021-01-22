import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6RetryComponent } from './rxjs6-retry.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

