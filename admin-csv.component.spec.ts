import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCsvComponent } from './admin-csv.component';

describe('AdminCsvComponent', () => {
  let component: AdminCsvComponent;
  let fixture: ComponentFixture<AdminCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
