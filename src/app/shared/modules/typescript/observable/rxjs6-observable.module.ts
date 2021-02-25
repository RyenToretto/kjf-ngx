import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { Rxjs6ObservableComponent } from './rxjs6-observable.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6ObservableComponent },
        ])
    ],
    exports: [ Rxjs6ObservableComponent ],
    declarations: [
        Rxjs6ObservableComponent
    ],
    entryComponents: [
        Rxjs6ObservableComponent,
    ],
})
export class Rxjs6ObservableModule {
}

