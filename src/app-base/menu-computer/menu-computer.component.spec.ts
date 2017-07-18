import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComputerComponent } from './menu-computer.component';

describe('MenuComputerComponent', () => {
  let component: MenuComputerComponent;
  let fixture: ComponentFixture<MenuComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
