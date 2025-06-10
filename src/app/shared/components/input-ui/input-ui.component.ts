import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input-ui',
  templateUrl: './input-ui.component.html',
  styleUrl: './input-ui.component.css',
  imports: [MatIconModule, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputUiComponent),
      multi: true,
    },
  ],
})
export class InputUiComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() errorMessage: string = '';
  @Input() helperText: string = '';
  @Input() maxLength: number | null = null;
  @Input() minLength: number | null = null;
  @Input() pattern: string | null = null;
  @Input() autocomplete: string = 'on';
  @Input() iconLeft: string | null = null;
  @Input() iconRight: string | null = null;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'outline' | 'filled' | 'underlined' = 'outline';
  @Output() inputChange = new EventEmitter<string>();
  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() iconLeftClick = new EventEmitter<MouseEvent>();
  @Output() iconRightClick = new EventEmitter<MouseEvent>();

  inputValue: string = '';
  isDisabled: boolean = false;
  touched: boolean = false;
  isFocused: boolean = false;

  // ControlValueAccessor methods
  onChange: any = () => {};
  onTouched: any = () => {};
  isPasswordVisible: boolean = false;

  get inputType(): string {
    if (this.type === 'password') {
      return this.isPasswordVisible ? 'text' : 'password';
    }
    return this.type;
  }
  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value;
    this.onChange(value);
    this.inputChange.emit(value);
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  writeValue(value: string): void {
    this.inputValue = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // Input events
  // Removed duplicate implementation of onInputChange

  onInputBlur(event: FocusEvent): void {
    this.isFocused = false;
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
    this.blur.emit(event);
  }

  onInputFocus(event: FocusEvent): void {
    this.isFocused = true;
    this.focus.emit(event);
  }

  onIconLeftClicked(event: MouseEvent): void {
    this.iconLeftClick.emit(event);
  }

  onIconRightClicked(event: MouseEvent): void {
    this.iconRightClick.emit(event);
  }

  get showErrorMessage(): boolean {
    return this.touched && !!this.errorMessage;
  }

  get inputSizeClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'py-1 px-2 text-sm';
      case 'lg':
        return 'py-3 px-4 text-lg';
      default:
        return 'py-2 px-3 text-base';
    }
  }

  get iconSizeClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'text-sm';
      case 'lg':
        return 'text-xl';
      default:
        return 'text-base';
    }
  }

  get variantClasses(): string {
    const baseClasses =
      'w-full  rounded focus:outline-none transition duration-200 bg-transparent';
    const focusClasses = this.isFocused ? 'ring-2 ' : '';

    switch (this.variant) {
      case 'filled':
        return `${baseClasses} ${focusClasses} bg-gray-100 border border-[#2C2A724D] focus:bg-white focus:ring-[#2C2A724D] focus:border-[#2C2A724D]`;
      case 'underlined':
        return `${baseClasses} ${focusClasses} bg-transparent border-b rounded-none focus:ring-0 border-[#2C2A724D] focus:border-[#2C2A724D]`;
      default: // outline
        return `${baseClasses} ${focusClasses} w-full bg-transparent  border border-[#2C2A724D] focus:ring-[#2C2A724D] focus:border-[#2C2A724D]`;
    }
  }

  get inputId(): string {
    return this.label ? this.label.toLowerCase().replace(/\s+/g, '-') : '';
  }
}
