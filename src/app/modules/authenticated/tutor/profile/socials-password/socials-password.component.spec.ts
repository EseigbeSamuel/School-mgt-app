import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsPasswordComponent } from './socials-password.component';

describe('SocialsPasswordComponent', () => {
  let component: SocialsPasswordComponent;
  let fixture: ComponentFixture<SocialsPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
