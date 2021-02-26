import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared.module';

import { TemplateDriveComponent } from './template-drive.component';

const components = [
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: TemplateDriveComponent },
        ])
    ],
    exports: [ TemplateDriveComponent, ...components ],
    declarations: [
        ...components,
        TemplateDriveComponent
    ],
    entryComponents: [
        TemplateDriveComponent,
    ],
})
export class TemplateDriveModule {
}

