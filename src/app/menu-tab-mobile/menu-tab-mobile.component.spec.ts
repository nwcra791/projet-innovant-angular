import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabMobileComponent } from './menu-tab-mobile.component';

describe('MenuTabMobileComponent', () => {
  let component: MenuTabMobileComponent;
  let fixture: ComponentFixture<MenuTabMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTabMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTabMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
