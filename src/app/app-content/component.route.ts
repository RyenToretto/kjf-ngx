import { ExamplePanelComponent } from '../example-panel/example-panel.component';

export const routesConfig = [
    {
        path: '',
        redirectTo: 'rxjs',
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
    },
    {
        path: 'svg',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/svg-demo/svg-demo.module').then(m => m.SvgDemoModule),
        data: {
            type: 'svg',
            name: 'SvgDemo',
            cnName: 'SvgDemo 测试',
            description: '学习 Svg',
            tmw: '新兴图像技术'
        }
    },
    {
        path: 'rxjs',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs-demo/rxjs-demo.module').then(m => m.RxjsDemoModule),
        data: {
            type: 'rxjs',
            name: 'RxjsDemo',
            cnName: 'RxjsDemo 测试',
            description: '学习 rxjs',
            tmw: 'Observable'
        }
    },
];
