import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import { SimpleTestComponent } from './simple-test.component';

import { CustomComponent } from './custom/custom.component';

const components = [
    CustomComponent
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: SimpleTestComponent },
        ])
    ],
    exports: [ SimpleTestComponent, ...components ],
    declarations: [
        ...components,
        SimpleTestComponent
    ],
    entryComponents: [
        SimpleTestComponent,
    ],
})
export class SimpleTestModule {
}

