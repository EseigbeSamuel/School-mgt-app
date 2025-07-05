import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  NgxIntlTelInputModule,
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';

@Component({
  selector: 'app-intl-phone-input',
  standalone: true,
  templateUrl: './intl-phone-input.component.html',
  styleUrl: './intl-phone-input.component.css',
  imports: [FormsModule, ReactiveFormsModule, NgxIntlTelInputModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IntlPhoneInputComponent),
      multi: true,
    },
  ],
})
export class IntlPhoneInputComponent implements ControlValueAccessor {
  @Input() error: boolean = false;
  @Input() label: string = 'Phone number';

  // Add the missing properties
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  preferredCountries: CountryISO[] = [
    CountryISO.Nigeria,
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  separateDialCode = false;

  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });
  isFocused: boolean = false;
  // ControlValueAccessor methods
  onChange = (value: any) => {};
  onTouched = () => {};

  constructor() {
    // Subscribe to form changes and propagate to parent form
    this.phoneForm.get('phone')?.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.phoneForm.get('phone')?.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.phoneForm.disable() : this.phoneForm.enable();
  }
  onInputFocus(event: FocusEvent): void {
    this.isFocused = true;
    // this.focus.emit(event);
  }
  // Method to determine CSS classes based on error state
  variantClasses(): string {
    const baseClasses =
      'w-full rounded focus:outline-none transition duration-200 py-2 px-3 pl-12';
    const focusClasses = this.isFocused ? 'ring-2 ' : '';

    return `${baseClasses} ${focusClasses} bg-transparent border border-[#2C2A724D] focus:ring-[#2C2A724D] focus:border-[#2C2A724D]`;
  }

  // Handle touch events
  onBlur(): void {
    this.onTouched();
  }
}
