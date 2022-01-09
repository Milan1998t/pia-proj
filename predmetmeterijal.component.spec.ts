import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetmeterijalComponent } from './predmetmeterijal.component';

describe('PredmetmeterijalComponent', () => {
  let component: PredmetmeterijalComponent;
  let fixture: ComponentFixture<PredmetmeterijalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetmeterijalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetmeterijalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
