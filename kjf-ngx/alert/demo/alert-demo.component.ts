import {
  Component
} from '@angular/core';

@Component({
    selector: 'd-alert-demo',
    templateUrl: './alert-demo.component.html'
})
export class AlertDemoComponent {

  navItems = [
    { dAnchorLink: 'basic-usage', value: '基本用法'},
    { dAnchorLink: 'tips-to-close', value: '可关闭的提示'}
  ];

  constructor() {

  }
}
