import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Renderer2,
  NgZone
} from '@angular/core';

@Component({
  selector: 'cd-app-content', // tslint:disable-line
  templateUrl: './app-content.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppContentComponent implements OnInit, OnDestroy {
  type = '通用';
  types = ['通用'];
  constructor(private renderer2: Renderer2, private ngZone: NgZone) {}
  ngOnInit(): void {
  }

  ngOnDestroy(): void {}
}

