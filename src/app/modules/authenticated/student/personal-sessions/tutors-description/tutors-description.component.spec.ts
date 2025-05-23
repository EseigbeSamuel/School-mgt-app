import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsDescriptionComponent } from './tutors-description.component';

describe('TutorsDescriptionComponent', () => {
  let component: TutorsDescriptionComponent;
  let fixture: ComponentFixture<TutorsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorsDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
