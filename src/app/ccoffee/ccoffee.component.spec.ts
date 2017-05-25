import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcoffeeComponent } from './ccoffee.component';

describe('CcoffeeComponent', () => {
  let component: CcoffeeComponent;
  let fixture: ComponentFixture<CcoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
