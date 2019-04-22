import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HxaComponent } from './hxa.component';

describe('HxaComponent', () => {
  let component: HxaComponent;
  let fixture: ComponentFixture<HxaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HxaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
