import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { It4683Component } from './it4683.component';

describe('It4683Component', () => {
  let component: It4683Component;
  let fixture: ComponentFixture<It4683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ It4683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(It4683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
