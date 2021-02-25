import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KjfNgxModule } from 'kjf-ngx';
import { SharedModule } from '../shared/shared.module';

import { routesConfig } from './component.route';

import { AppContentComponent } from './app-content.component';
import { ExamplePanelComponent } from '../example-panel/example-panel.component';

@NgModule({
    declarations: [
        AppContentComponent,
        ExamplePanelComponent,
    ],
    imports: [
        SharedModule,
        KjfNgxModule.forRoot(),
        RouterModule.forChild([
            {
                path: '',
                component: AppContentComponent,
                data: {},
                children: routesConfig
            },
        ]),
    ]
})
export class AppContentModule {
    constructor() {}
}
