import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6CombineLatestComponent } from './rxjs6-combine-latest.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

