import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TypescriptOverviewComponent } from './typescript-overview.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

