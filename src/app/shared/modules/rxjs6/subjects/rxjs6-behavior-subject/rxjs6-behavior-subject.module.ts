import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6BehaviorSubjectComponent } from './rxjs6-behavior-subject.component';

import { OnePubsubChildComponent } from './one-pubsub-child/one-pubsub-child.component';
import { TwoPubsubChildComponent } from './two-pubsub-child/two-pubsub-child.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6BehaviorSubjectComponent },
        ])
    ],
    exports: [ Rxjs6BehaviorSubjectComponent ],
    declarations: [
        Rxjs6BehaviorSubjectComponent,

        OnePubsubChildComponent,
        TwoPubsubChildComponent,
    ],
    entryComponents: [
        Rxjs6BehaviorSubjectComponent,
    ],
})
export class Rxjs6BehaviorSubjectModule {
}

