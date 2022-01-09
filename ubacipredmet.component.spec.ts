import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbacipredmetComponent } from './ubacipredmet.component';

describe('UbacipredmetComponent', () => {
  let component: UbacipredmetComponent;
  let fixture: ComponentFixture<UbacipredmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbacipredmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbacipredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
