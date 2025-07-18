import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrl: './switch-button.component.css',
})
export class SwitchButtonComponent {
  @Input() modelValue: boolean = false;
  @Output() modelValueChange = new EventEmitter<boolean>();

  toggle() {
    this.modelValue = !this.modelValue;
    this.modelValueChange.emit(this.modelValue);
  }
}
