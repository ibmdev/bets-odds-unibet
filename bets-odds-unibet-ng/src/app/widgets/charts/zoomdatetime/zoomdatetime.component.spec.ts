import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomdatetimeComponent } from './zoomdatetime.component';

describe('ZoomdatetimeComponent', () => {
  let component: ZoomdatetimeComponent;
  let fixture: ComponentFixture<ZoomdatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomdatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomdatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
