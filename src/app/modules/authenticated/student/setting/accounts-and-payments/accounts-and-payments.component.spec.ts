import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsAndPaymentsComponent } from './accounts-and-payments.component';

describe('AccountsAndPaymentsComponent', () => {
  let component: AccountsAndPaymentsComponent;
  let fixture: ComponentFixture<AccountsAndPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsAndPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsAndPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
