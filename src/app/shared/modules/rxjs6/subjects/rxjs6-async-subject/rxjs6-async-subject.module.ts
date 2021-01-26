import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6AsyncSubjectComponent } from './rxjs6-async-subject.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

