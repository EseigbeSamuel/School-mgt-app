import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [CommonModule],
})
export class ModalComponent {
  @Input() show = false;
  @Input() title? = '';
  @Output() close = new EventEmitter<void>();
  @Input() custom?: boolean = false;

  closeModal() {
    this.close.emit();
  }
}
