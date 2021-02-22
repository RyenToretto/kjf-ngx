import {
    Component
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'typescript-overview',
    templateUrl: './typescript-overview.component.html',
    styleUrls: ['./typescript-overview.component.scss']
})
export class TypescriptOverviewComponent {
    constructor(private router: Router) {}

    toChildComponent(path: string) {
        const navigation = this.router.url.split('/');
        navigation.pop();
        navigation.push(path);
        this.router.navigate(navigation);
    }
}
