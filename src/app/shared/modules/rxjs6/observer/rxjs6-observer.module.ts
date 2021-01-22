import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6ObserverComponent } from './rxjs6-observer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

