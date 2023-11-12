import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoLineChartComponent } from './acceso-line-chart.component';

describe('AccesoLineChartComponent', () => {
  let component: AccesoLineChartComponent;
  let fixture: ComponentFixture<AccesoLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
