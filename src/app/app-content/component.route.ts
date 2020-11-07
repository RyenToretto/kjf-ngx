import { ExamplePanelComponent } from '../example-panel/example-panel.component';

export const routesConfig = [
    {
        path: '',
        redirectTo: 'ioc',
        pathMatch: 'full',
        data: {}
    },
    {
        path: 'ioc',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/ioc-demo/ioc-demo.module').then(m => m.IocDemoModule),
        data: {
            type: '学习',
            name: 'IocDemo',
            cnName: '控制反转测试',
            description: '学习 angular 的控制反转。',
            tmw: '解耦，代码复用，增强扩展性。'
        }
    },
    {
        path: 'rule',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rule/rule.module').then(m => m.RuleModule),
        data: {
            type: '测试',
            name: 'Rule',
            cnName: '尺子',
            description: '测试尺子。',
            tmw: '就测试一下模块'
        }
    },
    {
        path: 'alert',
        component: ExamplePanelComponent,
        loadChildren: () => import('../../../kjf-ngx/alert/demo/alert-demo.module').then(m => m.AlertDemoModule),
        data: {
            type: '反馈',
            name: 'Alert',
            cnName: '警告',
            description: '用于向用户显示警告的信息。',
            tmw: '当页面需要向用户发出警告信息时。'
        }
    }
];
