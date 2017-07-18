import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosterComponent } from './hoster.component';

describe('HosterComponent', () => {
  let component: HosterComponent;
  let fixture: ComponentFixture<HosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
