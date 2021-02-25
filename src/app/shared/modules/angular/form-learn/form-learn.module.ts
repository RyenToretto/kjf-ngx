import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { FormLearnComponent } from './form-learn.component';

const components = [
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: FormLearnComponent },
        ])
    ],
    exports: [ FormLearnComponent, ...components ],
    declarations: [
        ...components,
        FormLearnComponent
    ],
    entryComponents: [
        FormLearnComponent,
    ],
})
export class FormLearnModule {
}

