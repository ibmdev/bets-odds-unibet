import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineseriesComponent } from './lineseries.component';

describe('LineseriesComponent', () => {
  let component: LineseriesComponent;
  let fixture: ComponentFixture<LineseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
