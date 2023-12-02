import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolargeoComponent } from './solargeo.component';

describe('SolargeoComponent', () => {
  let component: SolargeoComponent;
  let fixture: ComponentFixture<SolargeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolargeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolargeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
