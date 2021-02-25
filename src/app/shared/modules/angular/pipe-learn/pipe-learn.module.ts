import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import { PipeLearnComponent } from './pipe-learn.component';

import { PipeLearnPipes } from './welcome.pipe';

const components = [
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: PipeLearnComponent },
        ])
    ],
    exports: [ PipeLearnComponent, ...components ],
    declarations: [
        ...components,
        PipeLearnComponent,
        ...PipeLearnPipes
    ],
    entryComponents: [
        PipeLearnComponent,
    ],
})
export class PipeLearnModule {
}

