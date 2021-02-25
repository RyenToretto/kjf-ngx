import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { TypescriptOverviewComponent } from './typescript-overview.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: TypescriptOverviewComponent },
        ])
    ],
    exports: [ TypescriptOverviewComponent ],
    declarations: [
        TypescriptOverviewComponent

    ],
    entryComponents: [
        TypescriptOverviewComponent,
    ],
})
export class TypescriptOverviewModule {
}

