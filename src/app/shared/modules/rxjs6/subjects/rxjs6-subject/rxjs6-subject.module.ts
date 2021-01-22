import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6SubjectComponent } from './rxjs6-subject.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6SubjectComponent },
        ])
    ],
    exports: [ Rxjs6SubjectComponent ],
    declarations: [
        Rxjs6SubjectComponent
    ],
    entryComponents: [
        Rxjs6SubjectComponent,
    ],
})
export class Rxjs6SubjectModule {
}

