import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-select',
  standalone: false,
  templateUrl: './drop-select.component.html',
  styleUrls: ['./drop-select.component.css'],
})
export class DropSelectComponent {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() placeholder: string | null = null;

  @Output() valueChange = new EventEmitter<string>();

  isFocused: boolean = false;

  onValueChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }

  get computedPlaceholder(): string {
    return this.placeholder || this.label || 'Select an option';
  }

  get variantClasses(): string {
    const base =
      'w-full rounded px-5 py-2  bg-transparent border text-sm text-gray-700 focus:outline-none transition duration-200';
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
