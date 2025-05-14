import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropSelectComponent } from './drop-select.component';

describe('DropSelectComponent', () => {
  let component: DropSelectComponent;
  let fixture: ComponentFixture<DropSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
