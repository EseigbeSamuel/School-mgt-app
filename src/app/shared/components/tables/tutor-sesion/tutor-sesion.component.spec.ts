import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSesionComponent } from './tutor-sesion.component';

describe('TutorSesionComponent', () => {
  let component: TutorSesionComponent;
  let fixture: ComponentFixture<TutorSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
