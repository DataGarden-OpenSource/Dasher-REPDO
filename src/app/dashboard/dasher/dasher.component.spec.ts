import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasherComponent } from './dasher.component';

describe('DasherComponent', () => {
  let component: DasherComponent;
  let fixture: ComponentFixture<DasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
