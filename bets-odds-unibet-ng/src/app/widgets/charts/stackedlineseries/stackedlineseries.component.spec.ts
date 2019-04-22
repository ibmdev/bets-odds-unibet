import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedlineseriesComponent } from './stackedlineseries.component';

describe('StackedlineseriesComponent', () => {
  let component: StackedlineseriesComponent;
  let fixture: ComponentFixture<StackedlineseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedlineseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedlineseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
