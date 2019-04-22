import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeawayComponent } from './homeaway.component';

describe('HomeawayComponent', () => {
  let component: HomeawayComponent;
  let fixture: ComponentFixture<HomeawayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeawayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
