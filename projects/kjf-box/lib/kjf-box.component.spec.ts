import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjfBoxComponent } from './kjf-box.component';

describe('KjfBoxComponent', () => {
  let component: KjfBoxComponent;
  let fixture: ComponentFixture<KjfBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KjfBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KjfBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
