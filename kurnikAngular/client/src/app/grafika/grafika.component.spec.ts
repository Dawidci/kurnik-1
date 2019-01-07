import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafikaComponent } from './grafika.component';

describe('GrafikaComponent', () => {
  let component: GrafikaComponent;
  let fixture: ComponentFixture<GrafikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
