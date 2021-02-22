import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimpleTestComponent } from './simple-test.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: SimpleTestComponent },
        ])
    ],
    exports: [ SimpleTestComponent ],
    declarations: [
        SimpleTestComponent
    ],
    entryComponents: [
        SimpleTestComponent,
    ],
})
export class SimpleTestModule {
}

