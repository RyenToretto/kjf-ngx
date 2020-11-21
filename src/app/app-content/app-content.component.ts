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
                const group = groupedRoutesObj[key].map((item) => {
                        if (item.data.name) {
                            return {
                                title: item.data.name + ' ' + item.data.cnName,
                                link: item.path,
                            };
                        } else {
                            return {};
                        }
                    }
                ).filter((item) => Object.keys(item).length !== 0)
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

