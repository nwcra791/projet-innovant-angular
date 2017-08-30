import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerTripComponent } from './traveller-trip.component';

describe('TravellerTripComponent', () => {
  let component: TravellerTripComponent;
  let fixture: ComponentFixture<TravellerTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
