import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAthenticatedComponent } from './un-athenticated.component';

describe('UnAthenticatedComponent', () => {
  let component: UnAthenticatedComponent;
  let fixture: ComponentFixture<UnAthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnAthenticatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnAthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
