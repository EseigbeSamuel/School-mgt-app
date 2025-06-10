import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAndQuizzesComponent } from './assessment-and-quizzes.component';

describe('AssessmentAndQuizzesComponent', () => {
  let component: AssessmentAndQuizzesComponent;
  let fixture: ComponentFixture<AssessmentAndQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentAndQuizzesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentAndQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
