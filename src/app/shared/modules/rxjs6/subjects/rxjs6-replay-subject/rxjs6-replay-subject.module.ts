import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6ReplaySubjectComponent } from './rxjs6-replay-subject.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

