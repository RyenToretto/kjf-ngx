import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { Rxjs6SchedulerComponent } from './rxjs6-scheduler.component';

@NgModule({
    imports: [
        SharedModule,
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

