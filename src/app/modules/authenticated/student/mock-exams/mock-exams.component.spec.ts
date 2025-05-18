import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockExamsComponent } from './mock-exams.component';

describe('MockExamsComponent', () => {
  let component: MockExamsComponent;
  let fixture: ComponentFixture<MockExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
