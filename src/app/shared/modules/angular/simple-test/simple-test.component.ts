import {
    Component
} from '@angular/core';
import { HttpClient } from '@angular/common/http'; // (3) 从 @angular/common/http 模块中导入 HttpClient；

import { GitMember, PersonTestType, TestOutputEvent } from './entries';

import { SimpleTestService } from './services/simple-test.service';

@Component({
    selector: 'simple-test',
    templateUrl: './simple-test.component.html',
    styleUrls: ['./simple-test.component.scss']
})
export class SimpleTestComponent {
    testName = '插值表达式';

    testContent = {
        obj: '对象属性',
        usual: '普通文本'
    };

    testAuthor: PersonTestType = { name: 'kjf' };

    testCondition = true;

    testLines: string[] = [
        '这是第 1 行',
        '这是第 2 行',
        '这是第 3 行'
    ];

    testCount = 0;

    testLevel = 20;

    testMessage = 20;

    testMembers: GitMember[];

    messageFromChild: TestOutputEvent;

    constructor(private http: HttpClient,public simpleTestService: SimpleTestService) {} // (4) 使用构造注入，注入 http 服务；

    ngOnInit() {
        if (this.simpleTestService.testOn) {
            // (5) 调用 http 服务的 get() 方法，设置请求地址并发送 HTTP 请求；
            this.http.get<GitMember[]>(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
                .subscribe(data => {
                    if (data) this.testMembers = data; // (6) 把请求的结果，赋值给对应的属性。
                });
        } else {
            this.testMembers = this.simpleTestService.mockMember;
        }
    }

    testClick(e) {
        console.log('--testClick-> 事件参数: ', e);
        this.testCount++;
    }

    addTestLevel(e, newValue) {
        console.log('--addTestLevel-> 事件参数: ', e);
        this.testLevel = this.testLevel + +newValue;
    }

    handleChildClick(e) {
        this.messageFromChild = e;
    }
}
