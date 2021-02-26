import {
    Component,
    ViewEncapsulation,
    OnInit,
    OnDestroy,
    Renderer2,
    NgZone
} from '@angular/core';
import { groupBy, map, cloneDeep } from 'lodash-es';

import {routesConfig} from './component.route';

@Component({
    selector: 'cd-app-content', // tslint:disable-line
    templateUrl: './app-content.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AppContentComponent implements OnInit, OnDestroy {
    type = '通用';
    types = ['通用'];
    componentsDataDisplay: any = [];

    groupedRoutes: any;
    componentsData = [];

    constructor(private renderer2: Renderer2, private ngZone: NgZone) {
        const routesWithData = map(routesConfig, (route) => {
            if (!route.data) {
                route.data = {};
            }
            return route;
        });

        const groupedRoutesObj = groupBy(routesWithData,
            (route) => {
                return (route as any).data.type || '通用';
            });

        this.groupedRoutes = [];
        for (const key in groupedRoutesObj) {
            if (key) {
                const group = groupedRoutesObj[key].reduce((newArr, item, index) => {
                    if (!item.data || !item.data.name) {
                        return newArr;
                    }
                    const lastName = newArr[newArr.length - 1]
                        && newArr[newArr.length - 1].title
                        && newArr[newArr.length - 1].title.split('.')[0];
                    if (item.data.name && item.data.name.startsWith(lastName)) {
                        if (!newArr[newArr.length - 1].children) {
                            newArr[newArr.length - 1] = {
                                title: newArr[newArr.length - 1].title,
                                children: [{
                                    title: '综述',
                                    link: newArr[newArr.length - 1].link,
                                    open: true
                                }],
                                open: true
                            };
                        }
                        newArr[newArr.length - 1].children = [...newArr[newArr.length - 1].children, {
                            title: item.data.name + ' ' + item.data.cnName,
                            link: item.path,
                            open: true
                        }];
                    } else {
                        newArr.push({
                            title: item.data.name + ' ' + item.data.cnName,
                            link: item.path,
                            open: true
                        });
                    }
                    return newArr;
                }, []).filter((item) => Object.keys(item).length !== 0)
                    .sort(function (s1, s2) {
                        const prev = (s1.title).toUpperCase();
                        const next = (s2.title).toUpperCase();
                        if (prev < next) {
                            return -1;
                        }
                        if (prev > next) {
                            return 1;
                        }
                        return 0;
                    });
                this.componentsData.push({ title: key, children: group, open: true });
            }
        }
    }

    ngOnInit(): void {
        this.onSearch('');
    }

    ngOnDestroy(): void {}

    onSearch(event) {
        this.componentsDataDisplay = cloneDeep(this.componentsData).filter(catalog => {
            catalog.children = catalog.children.filter(item => {
                return item.title.toLowerCase().includes(event.toLowerCase());
            });
            return catalog.children.length;
        });
    }
}

