import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularOverviewComponent } from './angular-overview.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

