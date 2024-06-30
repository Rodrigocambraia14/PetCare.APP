import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCalendarComponent } from './vaccine-calendar.component';

describe('VaccineCalendarComponent', () => {
  let component: VaccineCalendarComponent;
  let fixture: ComponentFixture<VaccineCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccineCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccineCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
