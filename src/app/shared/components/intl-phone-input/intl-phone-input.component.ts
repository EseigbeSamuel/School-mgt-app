import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CountryISO, NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { PhoneNumberFormat } from 'ngx-intl-tel-input';
import { SearchCountryField } from 'ngx-intl-tel-input';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-intl-phone-input',
  standalone: true,
  templateUrl: './intl-phone-input.component.html',
  styleUrl: './intl-phone-input.component.css',
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
  ],
})
export class IntlPhoneInputComponent {
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });
  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  inputValue: string = '';
  isDisabled: boolean = false;
  touched: boolean = false;
  isFocused: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  onInputBlur(event: FocusEvent): void {
    this.isFocused = false;
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
    // this.blur.emit(event);
  }

  onInputFocus(event: FocusEvent): void {
    this.isFocused = true;
    // this.focus.emit(event);
  }
  variantClasses(): string {
    const baseClasses =
      'w-full md:w-[440px]  rounded focus:outline-none transition duration-200 py-2 px-3 pl-12';
    const focusClasses = this.isFocused ? 'ring-2 ' : '';

    return `${baseClasses} ${focusClasses} bg-transparent border border-[#2C2A724D] focus:ring-[#2C2A724D] focus:border-[#2C2A724D]`;
  }
}
