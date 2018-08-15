import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcardComponent } from './highcard.component';

describe('HighcardComponent', () => {
  let component: HighcardComponent;
  let fixture: ComponentFixture<HighcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
