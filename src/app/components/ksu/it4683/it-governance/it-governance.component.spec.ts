import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItGovernanceComponent } from './it-governance.component';

describe('ItGovernanceComponent', () => {
  let component: ItGovernanceComponent;
  let fixture: ComponentFixture<ItGovernanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItGovernanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
