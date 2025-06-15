import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  CountryISO,
  NgxIntlTelInputModule,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';
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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IntlPhoneInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IntlPhoneInputComponent),
      multi: true,
    },
  ],
})
export class IntlPhoneInputComponent
  implements ControlValueAccessor, Validator
{
  @Input() showError: any;
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

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.phoneForm.get('phone')?.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.phoneForm.get('phone')?.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.phoneForm.disable();
    } else {
      this.phoneForm.enable();
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.phoneForm.valid ? null : { invalidPhone: true };
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  // Optional style helpers
  inputValue: string = '';
  isDisabled: boolean = false;
  touched: boolean = false;
  isFocused: boolean = false;

  onInputBlur(event: FocusEvent): void {
    this.isFocused = false;
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }

  onInputFocus(event: FocusEvent): void {
    this.isFocused = true;
  }

  variantClasses(): string {
    const baseClasses =
      'w-full rounded focus:outline-none transition duration-200 py-2 px-3 pl-12';
    const focusClasses = this.isFocused ? 'ring-2 ' : '';

    return `${baseClasses} ${focusClasses} bg-transparent border border-[#2C2A724D] focus:ring-[#2C2A724D] focus:border-[#2C2A724D] ${
      this.showError ? ' border-2 border-red-500' : ''
    }`;
  }
}
