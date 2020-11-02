import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { KjfNgxModule } from 'kjf-ngx';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        KjfNgxModule.forRoot(),
        FormsModule,
        RouterModule.forRoot(
            [
                {
                    path: '',
                    redirectTo: 'components',
                    pathMatch: 'full'
                },
                {
                    path: 'components',
                    loadChildren: () => import('./app-content/app-content.module').then(m => m.AppContentModule)
                },
                {
                    path: '**',
                    redirectTo: 'components'
                }
            ]
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
