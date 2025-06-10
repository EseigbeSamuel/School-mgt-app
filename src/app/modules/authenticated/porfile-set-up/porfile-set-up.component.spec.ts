import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfileSetUpComponent } from './porfile-set-up.component';

describe('PorfileSetUpComponent', () => {
  let component: PorfileSetUpComponent;
  let fixture: ComponentFixture<PorfileSetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorfileSetUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfileSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
