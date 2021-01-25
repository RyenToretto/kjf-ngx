import {
    Component
} from '@angular/core';

@Component({
    selector: 'rxjs6-observer',
    templateUrl: './rxjs6-observer.component.html',
    styleUrls: ['./rxjs6-observer.component.scss']
})
export class Rxjs6ObserverComponent {
    public code1 = `
      var observable = Rx.Observable
            .create(function(observer) {
                    observer.next('Jerry');
                    observer.next('Anna');
                    observer.complete();
                    observer.next('not work');
            })

        // 宣告一个观察者，具备 next, error, complete 三个方法
        var observer = {
            next: function(value) {
                console.log(value);
            },
            error: function(error) {
                console.log(error)
            },
            complete: function() {
                console.log('complete')
            }
        }

        // 用我们定义好的观察者，来订阅这个 observable
        observable.subscribe(observer)
    `;
    constructor() {}
}
