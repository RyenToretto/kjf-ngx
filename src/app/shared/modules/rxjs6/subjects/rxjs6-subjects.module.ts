import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6SubjectsComponent } from './rxjs6-subjects.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6SubjectsComponent },
        ])
    ],
    exports: [ Rxjs6SubjectsComponent ],
    declarations: [
        Rxjs6SubjectsComponent
    ],
    entryComponents: [
        Rxjs6SubjectsComponent,
    ],
})
export class Rxjs6SubjectsModule {
}

