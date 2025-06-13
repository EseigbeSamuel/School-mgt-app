import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsPaymentsComponent } from './accounts-payments.component';

describe('AccountsPaymentsComponent', () => {
  let component: AccountsPaymentsComponent;
  let fixture: ComponentFixture<AccountsPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
