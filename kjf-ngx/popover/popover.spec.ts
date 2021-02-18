import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { PopoverModule } from './popover.module';
import { PopoverComponent } from './popover.component';

@Component({
  template: `
  <d-popover [type]="type" [showIcon]= "showIcon" (closeEvent)="handleClose($event)" [cssClass]="cssClass">
    <span>成功。devcloud一站式云端DevOps平台。</span>
  </d-popover>
  `
})
class TestPopoverComponent {
  type = 'success';
  clickCount = 0;
  showIcon = true;
  cssClass = '';
  handleClose($event): void {
    this.clickCount++;
  }
}

describe('popover', () => {
  describe('popover basic', () => {
    let testComponent: TestPopoverComponent;
    let popoverElement: HTMLElement;
    let fixture: ComponentFixture<TestPopoverComponent>;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [PopoverModule],
        declarations: [TestPopoverComponent]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TestPopoverComponent);
      testComponent = fixture.componentInstance;
      popoverElement = fixture.debugElement.query(By.directive(PopoverComponent)).nativeElement;
      fixture.detectChanges();
    });
    describe('Popover demo has created successfully', () => {
      it('Popover should create popover testComponent', () => {
        expect(testComponent).toBeTruthy();
      });

      it('Popover should create popover container ', () => {
        expect(popoverElement).toBeTruthy();
      });

      it('Popover should have content', () => {
        expect(popoverElement.querySelector('.kjf-popover').textContent).toBe('成功。devcloud一站式云端DevOps平台。');
      });
    });
  });
});

