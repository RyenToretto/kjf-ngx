import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6ObservableComponent } from './rxjs6-observable.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

