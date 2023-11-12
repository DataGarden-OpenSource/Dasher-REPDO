import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDasherComponent } from './region-dasher.component';

describe('RegionDasherComponent', () => {
  let component: RegionDasherComponent;
  let fixture: ComponentFixture<RegionDasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionDasherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionDasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
