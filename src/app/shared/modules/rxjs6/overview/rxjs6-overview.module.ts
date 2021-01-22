import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6OverviewComponent } from './rxjs6-overview.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6OverviewComponent },
        ])
    ],
    exports: [ Rxjs6OverviewComponent ],
    declarations: [
        Rxjs6OverviewComponent

    ],
    entryComponents: [
        Rxjs6OverviewComponent,
    ],
})
export class Rxjs6OverviewModule {
}

