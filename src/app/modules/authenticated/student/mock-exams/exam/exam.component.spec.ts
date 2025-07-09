import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/modules/authenticated/student/mock-exams/exam/exam.component.spec.ts
import { ExamComponent } from './exam.component';

describe('ExamComponent', () => {
  let component: ExamComponent;
  let fixture: ComponentFixture<ExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamComponent);
========
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
>>>>>>>> 1077d44fe49a8666d124873f00c7602c16ddda0c:src/app/modules/index/index.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
