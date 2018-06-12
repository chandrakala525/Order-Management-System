import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBodyComponent } from './display-body.component';

describe('DisplayBodyComponent', () => {
  let component: DisplayBodyComponent;
  let fixture: ComponentFixture<DisplayBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
