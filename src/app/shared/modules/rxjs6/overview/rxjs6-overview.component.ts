import {
    Component
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rxjs6-overview',
    templateUrl: './rxjs6-overview.component.html',
    styleUrls: ['./rxjs6-overview.component.scss']
})
export class Rxjs6OverviewComponent {
    constructor(private router: Router) {}

    toChildComponent(path: string) {
        const navigation = this.router.url.split('/');
        navigation.pop();
        navigation.push(path);
        this.router.navigate(navigation);
    }
}
