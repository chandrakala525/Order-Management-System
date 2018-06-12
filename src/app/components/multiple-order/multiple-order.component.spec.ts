import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOrderComponent } from './multiple-order.component';

describe('MultipleOrderComponent', () => {
  let component: MultipleOrderComponent;
  let fixture: ComponentFixture<MultipleOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
