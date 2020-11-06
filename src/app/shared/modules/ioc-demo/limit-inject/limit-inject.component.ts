import { Component, OnInit } from '@angular/core';
import { HeroMessageService } from '../services/hero-message/hero-message.service';

@Component({
    selector: 'kjf-limit-inject',
    templateUrl: './limit-inject.component.html',
    styleUrls: ['./limit-inject.component.scss'],
    providers: [HeroMessageService]
})
export class LimitInjectComponent implements OnInit {

    constructor(public messageService: HeroMessageService) {}

    ngOnInit(): void {}

    addMsg(event: Event) {
        return this.messageService.addHeroMessage(`
        '希望把服务的有效性限制到应用程序的一个特定区域，使用：',
        'providers: [HeroService]',
        '通过把服务添加到子组件 @Component() 装饰器的 providers 数组中，来为 HeroesBaseComponent 提供另一个 HeroService 实例',
        '当 Angular 新建 HeroBaseComponent 的时候，它会同时新建一个 HeroService 实例，该实例只在该组件及其子组件(如果有)中可见',
        `);
    }
}
