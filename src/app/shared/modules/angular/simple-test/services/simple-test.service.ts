import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { GitMember } from '../entries';

const mockMember: GitMember[] = [
    {
        id: 1,
        login: '无敌浩克'
    },
    {
        id: 2,
        login: '雷神'
    },
    {
        id: 3,
        login: '钢铁侠'
    },
    {
        id: 4,
        login: '格鲁特'
    },
];

@Injectable({
    providedIn: 'root'
})
export class SimpleTestService {
    mockMember = mockMember;

    testOn = false;

    constructor(private http: HttpClient) { }

    getMembers(): Observable<GitMember[]>{
        if (this.testOn) {
            return this.http
                .get<GitMember[]>(`https://api.github.com/orgs/angular/members?page=1&per_page=5`);
        } else {
            of(this.mockMember);
        }
    }
}
