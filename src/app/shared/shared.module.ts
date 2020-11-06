import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

const SHARED_LIST = [
];

@NgModule({
    declarations: [...SHARED_LIST],
    imports: [
        FormsModule
    ],
    exports: [
        FormsModule,
        ...SHARED_LIST
    ],
    providers: [],
})
export class AppSharedModule {}
