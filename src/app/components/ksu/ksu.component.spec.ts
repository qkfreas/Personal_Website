import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KsuComponent } from './ksu.component';

describe('KsuComponent', () => {
  let component: KsuComponent;
  let fixture: ComponentFixture<KsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
