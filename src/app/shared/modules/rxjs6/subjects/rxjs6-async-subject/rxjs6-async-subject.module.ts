import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared.module';

import { Rxjs6AsyncSubjectComponent } from './rxjs6-async-subject.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6AsyncSubjectComponent },
        ])
    ],
    exports: [ Rxjs6AsyncSubjectComponent ],
    declarations: [
        Rxjs6AsyncSubjectComponent
    ],
    entryComponents: [
        Rxjs6AsyncSubjectComponent,
    ],
})
export class Rxjs6AsyncSubjectModule {
}

