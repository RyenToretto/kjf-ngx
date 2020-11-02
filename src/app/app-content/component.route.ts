import {ExamplePanelComponent} from '../example-panel/example-panel.component';

export const routesConfig = [
    {
        path: '',
        redirectTo: 'alert',
        pathMatch: 'full',
        data: {}
    },
    {
        path: 'alert', component: ExamplePanelComponent,
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
