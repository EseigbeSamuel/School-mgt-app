import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationUiComponent } from './activation-ui.component';

describe('ActivationUiComponent', () => {
  let component: ActivationUiComponent;
  let fixture: ComponentFixture<ActivationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivationUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
