import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowComponent } from './below.component';

describe('BelowComponent', () => {
  let component: BelowComponent;
  let fixture: ComponentFixture<BelowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
