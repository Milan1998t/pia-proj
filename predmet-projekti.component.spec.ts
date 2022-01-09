import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetProjektiComponent } from './predmet-projekti.component';

describe('PredmetProjektiComponent', () => {
  let component: PredmetProjektiComponent;
  let fixture: ComponentFixture<PredmetProjektiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetProjektiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetProjektiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
