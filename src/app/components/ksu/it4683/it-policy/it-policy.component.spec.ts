import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItPolicyComponent } from './it-policy.component';

describe('ItPolicyComponent', () => {
  let component: ItPolicyComponent;
  let fixture: ComponentFixture<ItPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
