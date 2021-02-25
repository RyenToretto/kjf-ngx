import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // (1) 引入 HttpClientModule
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const OFFICIAL_LIST = [
    CommonModule,
    HttpClientModule, // (2) 导入 HttpClientModule
    RouterModule,
    FormsModule
];

const SHARED_LIST = [
];

@NgModule({
    imports: [
        ...OFFICIAL_LIST
    ],
    exports: [
        ...OFFICIAL_LIST,
        ...SHARED_LIST
    ],
    declarations: [...SHARED_LIST],
    providers: []
})
export class SharedModule {}
