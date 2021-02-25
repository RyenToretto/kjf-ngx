import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared.module';

import { Rxjs6ReplaySubjectComponent } from './rxjs6-replay-subject.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6ReplaySubjectComponent },
        ])
    ],
    exports: [ Rxjs6ReplaySubjectComponent ],
    declarations: [
        Rxjs6ReplaySubjectComponent
    ],
    entryComponents: [
        Rxjs6ReplaySubjectComponent,
    ],
})
export class Rxjs6ReplaySubjectModule {
}

