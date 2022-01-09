import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetinfoComponent } from './predmetinfo.component';

describe('PredmetinfoComponent', () => {
  let component: PredmetinfoComponent;
  let fixture: ComponentFixture<PredmetinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
