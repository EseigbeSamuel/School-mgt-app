import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-drop-select',
  standalone: false,
  templateUrl: './drop-select.component.html',
  styleUrls: ['./drop-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropSelectComponent),
      multi: true,
    },
  ],
})
export class DropSelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() options: any[] = [];
  @Input() disabled: boolean = false;
  @Input() placeholder: string | null = null;
  @Input() showLabel: boolean = true;
  @Input() error: boolean = false;
  isFocused: boolean = false;
  value: string = '';

  @Output() valueChange = new EventEmitter<string>();

  // ControlValueAccessor internal methods
  private onChange: any = () => {};
  private onTouched: any = () => {};

  // Required
  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Handle select change
  onValueChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
    this.onTouched();
  }

  get computedPlaceholder(): string {
    return this.placeholder || this.label || 'Select an option';
  }

  get variantClasses(): string {
    const base = `w-full rounded px-2 py-3 bg-transparent border text-sm text-gray-700 focus:outline-none transition duration-200  ${
      this.error ? 'border-2 border-red-500' : ''
    }`;
    const ring =
      this.isFocused && !this.disabled
        ? 'ring-2 ring-[#2C2A724D]'
        : 'focus:ring-2 focus:ring-[#2C2A724D]';
    const border = 'border-[#2C2A724D]';
    const disabledStyle = this.disabled
      ? 'opacity-50 cursor-not-allowed bg-gray-100'
      : '';

    return `${base} ${ring} ${border} ${disabledStyle}`;
  }
}
