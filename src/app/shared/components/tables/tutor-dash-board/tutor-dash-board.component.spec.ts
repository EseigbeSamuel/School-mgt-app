import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorDashBoardComponent } from './tutor-dash-board.component';

describe('TutorDashBoardComponent', () => {
  let component: TutorDashBoardComponent;
  let fixture: ComponentFixture<TutorDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
