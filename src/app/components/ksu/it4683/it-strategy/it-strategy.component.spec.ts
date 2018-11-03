import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItStrategyComponent } from './it-strategy.component';

describe('ItStrategyComponent', () => {
  let component: ItStrategyComponent;
  let fixture: ComponentFixture<ItStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
