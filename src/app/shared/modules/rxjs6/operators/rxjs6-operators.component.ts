import {
    Component
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rxjs6-operators',
    templateUrl: './rxjs6-operators.component.html',
    styleUrls: ['./rxjs6-operators.component.scss']
})
export class Rxjs6OperatorsComponent {
    constructor(private router: Router) {}

    toChildComponent(path: string) {
        const navigation = this.router.url.split('/');
        navigation.pop();
        navigation.push(path);
        this.router.navigate(navigation).then(r => {
            console.log('----rxjs6-operators.component.ts----toChildComponent ===> r');
            console.log(r);
        });
    }
}
