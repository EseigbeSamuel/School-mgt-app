import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDobComponent } from './date-dob.component';

describe('DateDobComponent', () => {
  let component: DateDobComponent;
  let fixture: ComponentFixture<DateDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateDobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
