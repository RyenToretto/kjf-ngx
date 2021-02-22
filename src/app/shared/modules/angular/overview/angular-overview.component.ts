import {
  Component
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'angular-overview',
    templateUrl: './angular-overview.component.html',
    styleUrls: ['./angular-overview.component.scss']
})
export class AngularOverviewComponent {
  constructor(private router: Router) {}

    toChildComponent(path: string) {
        const navigation = this.router.url.split('/');
        navigation.pop();
        navigation.push(path);
        this.router.navigate(navigation);
    }
}
