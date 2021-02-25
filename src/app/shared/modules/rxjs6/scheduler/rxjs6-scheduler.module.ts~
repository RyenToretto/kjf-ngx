import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6SchedulerComponent } from './rxjs6-scheduler.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6SchedulerComponent },
        ])
    ],
    exports: [ Rxjs6SchedulerComponent ],
    declarations: [
        Rxjs6SchedulerComponent
    ],
    entryComponents: [
        Rxjs6SchedulerComponent,
    ],
})
export class Rxjs6SchedulerModule {
}

