import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSessionsComponent } from './personal-sessions.component';

describe('PersonalSessionsComponent', () => {
  let component: PersonalSessionsComponent;
  let fixture: ComponentFixture<PersonalSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalSessionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
