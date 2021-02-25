import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { Rxjs6ObserverComponent } from './rxjs6-observer.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6ObserverComponent },
        ])
    ],
    exports: [ Rxjs6ObserverComponent ],
    declarations: [
        Rxjs6ObserverComponent
    ],
    entryComponents: [
        Rxjs6ObserverComponent,
    ],
})
export class Rxjs6ObserverModule {
}

