import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoElectrificadoChartComponent } from './no-electrificado-chart.component';

describe('NoElectrificadoChartComponent', () => {
  let component: NoElectrificadoChartComponent;
  let fixture: ComponentFixture<NoElectrificadoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoElectrificadoChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoElectrificadoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
