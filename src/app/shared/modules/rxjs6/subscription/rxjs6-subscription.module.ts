import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared.module';

import { Rxjs6SubscriptionComponent } from './rxjs6-subscription.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6SubscriptionComponent },
        ])
    ],
    exports: [ Rxjs6SubscriptionComponent ],
    declarations: [
        Rxjs6SubscriptionComponent
    ],
    entryComponents: [
        Rxjs6SubscriptionComponent,
    ],
})
export class Rxjs6SubscriptionModule {
}

