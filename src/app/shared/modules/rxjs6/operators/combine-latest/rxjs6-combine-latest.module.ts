import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared.module';

import { Rxjs6CombineLatestComponent } from './rxjs6-combine-latest.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6CombineLatestComponent },
        ])
    ],
    exports: [ Rxjs6CombineLatestComponent ],
    declarations: [
        Rxjs6CombineLatestComponent
    ],
    entryComponents: [
        Rxjs6CombineLatestComponent,
    ],
})
export class Rxjs6CombineLatestModule {
}

