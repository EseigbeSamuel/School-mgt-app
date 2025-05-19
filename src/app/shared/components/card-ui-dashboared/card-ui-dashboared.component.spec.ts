import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUiDashboaredComponent } from './card-ui-dashboared.component';

describe('CardUiDashboaredComponent', () => {
  let component: CardUiDashboaredComponent;
  let fixture: ComponentFixture<CardUiDashboaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardUiDashboaredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUiDashboaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
