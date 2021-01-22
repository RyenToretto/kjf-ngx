import {
    Component, OnInit
} from '@angular/core';
import { Observable, PartialObserver, Subscriber } from 'rxjs';

@Component({
    selector: 'rxjs6-observable',
    templateUrl: './rxjs6-observable.component.html',
    styleUrls: ['./rxjs6-observable.component.scss']
})
export class Rxjs6ObservableComponent implements OnInit {

    public river$: Observable<number>;
    public code1 = `
      import {Observable} from 'rxjs';

      // 传给 new Observable 的回调函数如果没有订阅是不会执行的
      const observable = new Observable(subscriber => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
            setTimeout(() => {
              subscriber.next(4);
              subscriber.complete();
            }, 1000);
      });

      /****
      const fishMan: PartialObserver number = {
        next(x) { console.log('got value ' + x); },
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
      };
      this.river$.subscribe(fishMan);
      常见如下写法, 简单形式，即不用构建一个对象，而是直接把函数作为 subscribe 方法的参数
      甚至 error/complete 可以省略****/

      const subscription = this.river$.subscribe(
        next(x) { console.log('got value ' + x); },
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
      );

      // 观察者想退订，只要调用订阅返回的对象的 unsubscribe 方法
      // 这样观察者就再也不会接受到 Observable 的信息了
      subscription.unsubscrib();
    `;
    public fishMan: PartialObserver<number>;

    ngOnInit(): void {
        this.river$ = new Observable((subscriber: Subscriber<number>) => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
            setTimeout(() => {
                subscriber.next(4);
                subscriber.complete();
            }, 1000);
        });

        this.fishMan = {
            next(x) { console.log('got value ' + x); },
            error(err) { console.error('something wrong occurred: ' + err); },
            complete() { console.log('done'); }
        };
        console.log('订阅前');
        this.river$.subscribe(this.fishMan);
        console.log('订阅后');
    }
}
