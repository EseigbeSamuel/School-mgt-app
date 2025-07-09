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
  @Input() options: Array<string | { value: string; label: string }> = [];
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() placeholder: string | null = null;
  @Input() showLabel: boolean = true;
  @Output() valueChange = new EventEmitter<string>();
  @Input() error: boolean = false;

  isFocused: boolean = false;

  // ControlValueAccessor methods
  private onChange = (value: any) => {};
  private onTouched = () => {};

  onValueChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;

    // Emit the value change for existing functionality
    this.valueChange.emit(this.value);

    // Call the onChange callback for reactive forms
    this.onChange(this.value);
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
    // Call the onTouched callback for reactive forms
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    this.value = value || '';
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

  get computedPlaceholder(): string {
    return this.placeholder || this.label || 'Select an option';
  }

  get normalizedOptions(): { value: string; label: string }[] {
    return this.options.map((opt) =>
      typeof opt === 'string' ? { value: opt, label: opt } : opt
    );
  }

  get variantClasses(): string {
    const base =
      'w-full rounded px-2 py-2  bg-transparent border text-[16px] text-gray-600 focus:outline-none transition duration-200';
    const ring =
      this.isFocused && !this.disabled
        ? 'ring-2 ring-[#2C2A724D]'
        : 'focus:ring-2 focus:ring-[#2C2A724D]';
    const border = 'border-[#2C2A724D]';
    const disabledStyle = this.disabled
      ? 'opacity-50 cursor-not-allowed bg-gray-100'
      : '';

    return `${base} ${ring} ${border} ${disabledStyle}  ${
      this.error ? 'border-2 border-red-500' : ''
    }`;
  }
}
