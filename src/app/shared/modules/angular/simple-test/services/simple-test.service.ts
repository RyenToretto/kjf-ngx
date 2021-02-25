import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable }from 'rxjs';

import { GitMember } from '../entries';

@Injectable({
    providedIn: 'root'
})
export class SimpleTestService {
    constructor(private http: HttpClient) { }

    getMembers(): Observable<GitMember[]>{
        return this.http
            .get<GitMember[]>(`https://api.github.com/orgs/angular/members?page=1&per_page=5`);
    }
}
