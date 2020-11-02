import {
  Input,
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IExampleData } from 'kjf-ngx/shared/helpers';


@Component({
  selector: 'app-demo-cell',
  styles: [`
:host ::ng-deep section h4,
:host ::ng-deep section h5 {
    font-weight: bold;
    color: #96adfa;
}

:host ::ng-deep section {
  margin-bottom: 50px;
}

.examples-viewer-title {
  display: flex;
  padding: 8px 20px;
  font-size: 18px;
  font-weight: bold;
}

.examples {
  position: relative;
  padding: 30px;
  background: #fff;
}

div.html, div.typescript, div.markdown {
  padding: 0;
}

.html pre, .typescript pre, .markdown pre {
  padding: 26.5px;
}

:host ::ng-deep pre table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
}
`],
  templateUrl: './example-panel.component.html'
})
export class ExamplePanelComponent implements OnInit, AfterViewInit {
  @Input() data: IExampleData;
  @ViewChildren('html') html: QueryList<ElementRef>;
  @ViewChildren('typescript') typescript: QueryList<ElementRef>;
  @ViewChildren('documentation') documentation: QueryList<ElementRef>;
  componentName: string;
  componentTab: string;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private router: Router, private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(UrlSegments => {
      const names = UrlSegments[0].path.split('-').map((urlSegment) => {
        return `${urlSegment.charAt(0).toUpperCase()}${urlSegment.slice(1)}`;
      });
      this.componentName = names.join(' ');
      const fragmentIndex = this.router.url.split('/').pop().indexOf('#');
      this.componentTab = fragmentIndex === -1
        ? this.router.url.split('/').pop() : this.router.url.split('/').pop().slice(0, fragmentIndex);
    });

    this.route.data.subscribe((data: IExampleData) => {
      this.data = data;
    });

  }

  activeTabChange(tab: string): void {
    const navigation = this.router.url.split('/');
    navigation.pop();
    navigation.push(tab);
    this.router.navigate(navigation);
  }

  ngAfterViewInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}

