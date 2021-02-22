import { ExamplePanelComponent } from '../example-panel/example-panel.component';

export const routesConfig = [
    {
        path: '',
        redirectTo: 'rxjs',
        pathMatch: 'full',
        data: {}
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
        path: 'popover',
        component: ExamplePanelComponent,
        loadChildren: () => import('../../../kjf-ngx/popover/demo/popover-demo.module').then(m => m.PopoverDemoModule),
        data: {
            type: '反馈',
            name: 'Popover',
            cnName: '悬浮提示',
            description: '简单的文字提示气泡框。popover用来通知用户非关键性问题或提示某控件处于某特殊情况。',
            tmw: '单击控件则显示提示，单击空白处提示消失，气泡浮层不承载复杂文本和操作。'
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
        path: 'typescript',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/typescript/overview/typescript-overview.module')
            .then(m => m.TypescriptOverviewModule),
        data: {
            type: 'typescript-learn',
            name: '00. typescript 概览',
            cnName: '',
            description: 'typescript 描述',
            tmw: 'typescript 简介'
        }
    },
    {
        path: 'observable',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/typescript/observable/rxjs6-observable.module').then(m => m.Rxjs6ObservableModule),
        data: {
            type: 'typescript-learn',
            name: '01. Observable 可观察对象',
            cnName: '',
            description: 'Observable 可观察序列，只出不进',
            tmw: 'Observable 什么时候使用呢'
        }
    },
    {
        path: 'rxjs6',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/overview/rxjs6-overview.module').then(m => m.Rxjs6OverviewModule),
        data: {
            type: 'rxjs6-learn',
            name: '00. Rxjs6 概览',
            cnName: '',
            description: '数据流是一种可观察的序列，可以被订阅',
            tmw: 'rxjs6 ----通过可监听流来做异步编程'
        }
    },
    {
        path: 'observable',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/observable/rxjs6-observable.module').then(m => m.Rxjs6ObservableModule),
        data: {
            type: 'rxjs6-learn',
            name: '01. Observable 可观察对象',
            cnName: '',
            description: 'Observable 可观察序列，只出不进',
            tmw: 'Observable 什么时候使用呢'
        }
    },
    {
        path: 'observer',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/observer/rxjs6-observer.module').then(m => m.Rxjs6ObserverModule),
        data: {
            type: 'rxjs6-learn',
            name: '02. observer 观察者对象',
            cnName: '',
            description: 'Observer 观察者，只进不出',
            tmw: 'observer 什么时候使用呢'
        }
    },
    {
        path: 'operators',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/operators/rxjs6-operators.module').then(m => m.Rxjs6OperatorsModule),
        data: {
            type: 'rxjs6-learn',
            name: '03. operators 操作符',
            cnName: '',
            description: '学习 operators',
            tmw: 'operators 什么时候使用呢'
        }
    },
    {
        path: 'retry',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/operators/retry/rxjs6-retry.module').then(m => m.Rxjs6RetryModule),
        data: {
            type: 'rxjs6-learn',
            name: '03.1. retry',
            cnName: '',
            description: '学习 retry',
            tmw: 'retry 什么时候使用呢'
        }
    },
    {
        path: 'combine-latest',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/operators/combine-latest/rxjs6-combine-latest.module')
            .then(m => m.Rxjs6CombineLatestModule),
        data: {
            type: 'rxjs6-learn',
            name: '03.2. combineLatest',
            cnName: '',
            description: '学习 combineLatest',
            tmw: 'combineLatest 可以将多个 Observable 进行合并，并将它们最新的值作为输出'
        }
    },
    {
        path: 'subscription',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/subscription/rxjs6-subscription.module').then(m => m.Rxjs6SubscriptionModule),
        data: {
            type: 'rxjs6-learn',
            name: '04. subscription 订阅关系',
            cnName: '',
            description: 'Subscription 订阅关系----订阅之后形成的一个订阅关系，可以用于取消订阅',
            tmw: 'subscription 什么时候使用呢'
        }
    },
    {
        path: 'subjects',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/subjects/rxjs6-subjects.module').then(m => m.Rxjs6SubjectsModule),
        data: {
            type: 'rxjs6-learn',
            name: '05. subjects 主体',
            cnName: '',
            description: '学习 subjects',
            tmw: 'subjects 什么时候使用呢'
        }
    },
    {
        path: 'subject',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/subjects/rxjs6-subject/rxjs6-subject.module').then(m => m.Rxjs6SubjectModule),
        data: {
            type: 'rxjs6-learn',
            name: '05.1. Subject',
            cnName: '',
            description: 'Subject 可出可进的可观察序列；可作为观察者',
            tmw: 'Subject 一类特殊的 Observable，它可以向多个 Observer 多路推送数值'
        }
    },
    {
        path: 'behavior-subject',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/subjects/rxjs6-behavior-subject/rxjs6-behavior-subject.module')
            .then(m => m.Rxjs6BehaviorSubjectModule),
        data: {
            type: 'rxjs6-learn',
            name: '05.2. BehaviorSubject',
            cnName: '',
            description: 'BehaviorSubject 最新的值',
            tmw: 'BehaviorSubject 总是保存最近向数据消费者发送的值，当一个 Observer 订阅后，它会即刻从 BehaviorSubject 收到“最新的值”'
        }
    },
    {
        path: 'replay-subject',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/subjects/rxjs6-replay-subject/rxjs6-replay-subject.module')
            .then(m => m.Rxjs6ReplaySubjectModule),
        data: {
            type: 'rxjs6-learn',
            name: '05.3. ReplaySubject',
            cnName: '',
            description: 'ReplaySubject 带回放',
            tmw: 'ReplaySubject 向新的订阅者回放旧数值'
        }
    },
    {
        path: 'async-subject',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/subjects/rxjs6-async-subject/rxjs6-async-subject.module')
            .then(m => m.Rxjs6AsyncSubjectModule),
        data: {
            type: 'rxjs6-learn',
            name: '05.3. AsyncSubject',
            cnName: '',
            description: 'AsyncSubject 完成后，推最后一个值',
            tmw: 'AsyncSubject 仅会在执行完成后，推送执行环境中的最后一个值'
        }
    },
    {
        path: 'scheduler',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/rxjs6/scheduler/rxjs6-scheduler.module').then(m => m.Rxjs6SchedulerModule),
        data: {
            type: 'rxjs6-learn',
            name: '06. scheduler 调度器',
            cnName: '',
            description: '学习 scheduler',
            tmw: 'scheduler 什么时候使用呢'
        }
    },
    {
        path: 'angular',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/angular/overview/angular-overview.module').then(m => m.AngularOverviewModule),
        data: {
            type: 'angular-learn',
            name: '00. angular 概览',
            cnName: '',
            description: 'angular 描述',
            tmw: 'angular 简介'
        }
    },
    {
        path: 'ioc',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/angular/ioc/ioc-demo.module').then(m => m.IocDemoModule),
        data: {
            type: 'angular-learn',
            name: '01. IocDemo',
            cnName: '控制反转测试',
            description: '学习 angular 的控制反转。',
            tmw: '解耦，代码复用，增强扩展性。'
        }
    },
    {
        path: 'simple-test',
        component: ExamplePanelComponent,
        loadChildren: () => import('../shared/modules/angular/simple-test/simple-test.module').then(m => m.SimpleTestModule),
        data: {
            type: 'angular-learn',
            name: '06. simple-test',
            cnName: '',
            description: '学习 angular',
            tmw: '简单的 angular 测试'
        }
    }
];
