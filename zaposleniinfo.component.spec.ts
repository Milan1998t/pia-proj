import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniinfoComponent } from './zaposleniinfo.component';

describe('ZaposleniinfoComponent', () => {
  let component: ZaposleniinfoComponent;
  let fixture: ComponentFixture<ZaposleniinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
