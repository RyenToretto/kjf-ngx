import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PREFIX } from 'src/app/constants';

@Injectable({
    providedIn: 'root'
})
export class FlowEntryListService {
    constructor(private http: HttpClient) {}

    fetchPilotList() {
        return this.http.get(`${API_PREFIX}/pilot`);
    }
}
