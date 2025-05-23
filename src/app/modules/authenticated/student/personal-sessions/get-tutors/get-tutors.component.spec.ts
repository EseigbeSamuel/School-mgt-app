import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTutorsComponent } from './get-tutors.component';

describe('GetTutorsComponent', () => {
  let component: GetTutorsComponent;
  let fixture: ComponentFixture<GetTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTutorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
