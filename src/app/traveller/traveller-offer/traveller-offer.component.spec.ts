import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerOfferComponent } from './traveller-offer.component';

describe('TravellerComponent', () => {
  let component: TravellerOfferComponent;
  let fixture: ComponentFixture<TravellerOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
