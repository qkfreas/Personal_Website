import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LebenComponent } from './leben.component';

describe('LebenComponent', () => {
  let component: LebenComponent;
  let fixture: ComponentFixture<LebenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LebenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LebenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
