import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6SubscriptionComponent } from './rxjs6-subscription.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

