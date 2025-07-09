import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningGoalsComponent } from './learning-goals.component';

describe('LearningGoalsComponent', () => {
  let component: LearningGoalsComponent;
  let fixture: ComponentFixture<LearningGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
