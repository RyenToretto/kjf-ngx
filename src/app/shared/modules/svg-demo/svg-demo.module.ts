import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SvgDemoComponent } from './svg-demo.component';

import { SvgSimpleComponent } from './svg-simple/svg-simple.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'svg_demo' },
            { path: 'svg_demo', component: SvgDemoComponent }
        ])
    ],
    exports: [ SvgDemoComponent ],
    declarations: [
        SvgDemoComponent,

        SvgSimpleComponent,
    ],
    entryComponents: [
        SvgDemoComponent,
    ],
})
export class SvgDemoModule {
}

