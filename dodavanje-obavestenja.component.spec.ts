import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeObavestenjaComponent } from './dodavanje-obavestenja.component';

describe('DodavanjeObavestenjaComponent', () => {
  let component: DodavanjeObavestenjaComponent;
  let fixture: ComponentFixture<DodavanjeObavestenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodavanjeObavestenjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeObavestenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
