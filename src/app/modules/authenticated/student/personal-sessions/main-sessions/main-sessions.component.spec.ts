import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSessionsComponent } from './main-sessions.component';

describe('MainSessionsComponent', () => {
  let component: MainSessionsComponent;
  let fixture: ComponentFixture<MainSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSessionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
