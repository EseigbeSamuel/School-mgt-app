// button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [],
  standalone: false,
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';
  @Input() isLoading: boolean = false;
  @Output() btnClick = new EventEmitter<Event>();

  get classes(): string {
    let baseClasses =
      'flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 duration-300 hover:scale-102 mx-auto';

    const variantClasses = {
      primary: 'bg-button text-white focus:ring-button w-full mx-auto ',
      secondary:
        'bg-white  text-[#2C2A72] focus:ring-button border border-[#2C2A72] w-full mx-auto ',
      success:
        'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
      danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
      warning:
        'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500',
      info: 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500',
      light: 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-300',
      dark: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-700',
    };

    const sizeClasses = {
      sm: 'py-2 px-4 text-sm w-full md:text-[22px] text-[18px]',
      md: 'py-2 px-4 text-base w-full font-[600] md:text-[22px] text-[18px] ',
      lg: 'py-3 px-6 text-lg',
    };

    const stateClasses = [];

    if (this.disabled) {
      stateClasses.push('opacity-50 cursor-not-allowed');
    }

    if (this.isLoading) {
      stateClasses.push('relative pointer-events-none');
    }

    if (this.fullWidth) {
      stateClasses.push('w-full');
    }

    return [
      baseClasses,
      variantClasses[this.variant],
      sizeClasses[this.size],
      ...stateClasses,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
