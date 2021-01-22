import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rxjs6OperatorsComponent } from './rxjs6-operators.component';

import { CreateDateStreamComponent } from './create-date-stream/create-date-stream.component';
import { ControlStreamComponent} from './control-stream/control-stream.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '',  redirectTo: 'index' },
            { path: 'index', component: Rxjs6OperatorsComponent },

            { path: 'create_date_stream', component: CreateDateStreamComponent },
            { path: 'control_stream', component: ControlStreamComponent },
        ])
    ],
    exports: [ Rxjs6OperatorsComponent ],
    declarations: [
        Rxjs6OperatorsComponent,

        CreateDateStreamComponent,
        ControlStreamComponent
    ],
    entryComponents: [
        Rxjs6OperatorsComponent,
    ],
})
export class Rxjs6OperatorsModule {
}

