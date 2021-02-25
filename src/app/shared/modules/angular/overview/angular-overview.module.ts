import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { AngularOverviewComponent } from './angular-overview.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: AngularOverviewComponent },
        ])
    ],
    exports: [ AngularOverviewComponent ],
    declarations: [
        AngularOverviewComponent

    ],
    entryComponents: [
        AngularOverviewComponent,
    ],
})
export class AngularOverviewModule {
}

