import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppContentComponent } from './app-content.component';
import { routesConfig } from './component.route';
import { KjfNgxModule } from 'kjf-ngx';
import { ExamplePanelComponent } from '../example-panel/example-panel.component';

@NgModule({
    declarations: [
        AppContentComponent,
        ExamplePanelComponent,
    ],
    imports: [
        CommonModule,
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
