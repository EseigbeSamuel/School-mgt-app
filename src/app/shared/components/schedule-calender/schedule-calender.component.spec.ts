import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCalenderComponent } from './schedule-calender.component';

describe('ScheduleCalenderComponent', () => {
  let component: ScheduleCalenderComponent;
  let fixture: ComponentFixture<ScheduleCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
