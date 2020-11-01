import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKjfBoxComponent } from './test-kjf-box.component';

describe('TestKjfBoxComponent', () => {
  let component: TestKjfBoxComponent;
  let fixture: ComponentFixture<TestKjfBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestKjfBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKjfBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
