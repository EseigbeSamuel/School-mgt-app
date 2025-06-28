import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-dob',

  templateUrl: './date-dob.component.html',
  styleUrl: './date-dob.component.css',
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateDobComponent),
      multi: true,
    },
  ],
})
export class DateDobComponent implements ControlValueAccessor {
  @Input() label: string = 'Date of Birth';
  @Input() placeholder: string = 'DD/MM/YYYY';
  @Input() maxDate: string = new Date().toISOString().split('T')[0];
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;
  @Input() touched: boolean = false;

  value: string = '';
  isFocused: boolean = false;

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }
  onDateChange(event: any) {
    this.value = event.value;
    this.onChange(this.value);
  }
  onBlur() {
    this.isFocused = false;
    this.onTouched();
  }

  onFocus() {
    this.isFocused = true;
  }

  get variantClasses(): string {
    const base = `w-full rounded px-5 py-2 bg-transparent border text-sm text-gray-700 focus:outline-none transition duration-200`;
    const borderColor =
      this.error && this.touched ? 'border-red-500' : 'border-[#2C2A724D]';

    const ring = this.isFocused
      ? 'ring-2 ring-[#2C2A724D]'
      : 'focus:ring-2 focus:ring-[#2C2A724D]';

    return `${base} ${borderColor} ${ring}`;
  }
}
