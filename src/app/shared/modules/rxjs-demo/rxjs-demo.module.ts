import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RxjsDemoComponent } from './rxjs-demo.component';

import { KjfRxjsSimpleComponent } from './kjf-rxjs-simple/kjf-rxjs-simple.component';
import { KjfRxjsPubsubComponent } from './kjf-rxjs-pubsub/kjf-rxjs-pubsub.component';
import { KjfCreateDateStreamComponent } from './kjf-create-date-stream/kjf-create-date-stream.component';
import { KjfMutiStreamComponent } from './kjf-muti-stream/kjf-muti-stream.component';
import { KjfUsualOperatorComponent } from './kjf-usual-operator/kjf-usual-operator.component';
import { KjfObservableComponent } from './kjf-observable/kjf-observable.component';

import {KjfOnePubsubChildComponent} from './kjf-rxjs-pubsub/kjf-one-pubsub-child/kjf-one-pubsub-child.component';
import {KjfTwoPubsubChildComponent} from './kjf-rxjs-pubsub/kjf-two-pubsub-child/kjf-two-pubsub-child.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'rxjs_demo' },
            { path: 'rxjs_demo', component: RxjsDemoComponent },

            { path: 'rxjs-pubsub', component: KjfRxjsPubsubComponent },
            { path: 'create_date_stream', component: KjfCreateDateStreamComponent },
            { path: 'muti_stream', component: KjfMutiStreamComponent },
            { path: 'usual_operator', component: KjfUsualOperatorComponent },
            { path: 'observable', component: KjfObservableComponent }
        ])
    ],
    exports: [ RxjsDemoComponent ],
    declarations: [
        RxjsDemoComponent,

        KjfRxjsSimpleComponent,
        KjfRxjsPubsubComponent,
        KjfCreateDateStreamComponent,
        KjfMutiStreamComponent,
        KjfUsualOperatorComponent,
        KjfObservableComponent,

        KjfOnePubsubChildComponent,
        KjfTwoPubsubChildComponent,
    ],
    entryComponents: [
        RxjsDemoComponent,
    ],
})
export class RxjsDemoModule {
}

