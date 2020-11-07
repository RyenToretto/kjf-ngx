import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { RuleStore } from '../stores/rule.store';

@Injectable({
    providedIn: 'root'
})
export class RuleResolver implements Resolve<any> {
    constructor(private ruleStore: RuleStore) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const ruleId = route.params.ruleId;
        return this.ruleStore.fetchRule();
    }
}
