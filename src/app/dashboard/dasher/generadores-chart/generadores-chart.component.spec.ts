import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradoresChartComponent } from './generadores-chart.component';

describe('GeneradoresChartComponent', () => {
  let component: GeneradoresChartComponent;
  let fixture: ComponentFixture<GeneradoresChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradoresChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradoresChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
