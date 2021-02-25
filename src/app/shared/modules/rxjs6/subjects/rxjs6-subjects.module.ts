import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { Rxjs6SubjectsComponent } from './rxjs6-subjects.component';

@NgModule({
    imports: [
        SharedModule,
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

