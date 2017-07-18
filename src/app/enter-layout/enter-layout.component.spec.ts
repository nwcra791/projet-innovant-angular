import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLayoutComponent } from './enter-layout.component';

describe('EnterLayoutComponent', () => {
  let component: EnterLayoutComponent;
  let fixture: ComponentFixture<EnterLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
