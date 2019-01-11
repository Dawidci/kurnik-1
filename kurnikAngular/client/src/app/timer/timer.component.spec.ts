import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Time } from './timer.component';

describe('TimerComponent', () => {
  let component: Time;
  let fixture: ComponentFixture<Time>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Time ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Time);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
