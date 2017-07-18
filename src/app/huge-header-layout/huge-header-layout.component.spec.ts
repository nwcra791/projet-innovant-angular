import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HugeHeaderLayoutComponent } from './huge-header-layout.component';

describe('HugeHeaderLayoutComponent', () => {
  let component: HugeHeaderLayoutComponent;
  let fixture: ComponentFixture<HugeHeaderLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HugeHeaderLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HugeHeaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
