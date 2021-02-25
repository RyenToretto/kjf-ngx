import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KjfNgxModule } from 'kjf-ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        AppRoutingModule,
        SharedModule,

        KjfNgxModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
