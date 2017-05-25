import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbentoComponent } from './cbento.component';

describe('CbentoComponent', () => {
  let component: CbentoComponent;
  let fixture: ComponentFixture<CbentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
