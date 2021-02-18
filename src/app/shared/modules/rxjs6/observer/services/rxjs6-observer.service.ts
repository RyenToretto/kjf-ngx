import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Rxjs6ObserverService {
    subject = new Subject<any>(); // 这里可以创建多个subject

    constructor() { }
}