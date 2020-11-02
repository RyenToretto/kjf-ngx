import { Component, NgZone, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { VERSION } from 'kjf-ngx/version';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    version;
    currentLang: string;

    constructor(private renderer2: Renderer2, private ngZone: NgZone, private router: Router) {
        const oldHandler = this.router.errorHandler;
        this.router.errorHandler =  (err: any) => {
            if (err.stack && err.stack.indexOf('Error: Loading chunk') >= 0) {
                if (localStorage.getItem('customChunkError') !== err.stack) {
                    localStorage.setItem('customChunkError', err.stack);
                    window.location.reload();
                } else {
                    console.error(`custom Chunk Error`);
                }
            }
            oldHandler(err);
        };
    }
    ngOnInit(): void {
        this.version = VERSION.full;
        this.currentLang = localStorage.getItem('lang') || 'zh-cn';
    }
}
