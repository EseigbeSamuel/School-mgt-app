import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  HostListener,
  ElementRef,
} from '@angular/core';

export interface SortOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrl: './sort-dropdown.component.css',
  imports: [CommonModule]
})
export class SortDropdownComponent {
  @Output() selectionChange = new EventEmitter<SortOption>();

  isOpen = false;

  options: SortOption[] = [
    { value: 'date', label: 'Sort: By date' },
    { value: 'name', label: 'Sort: By name' },
    { value: 'size', label: 'Sort: By size' },
    { value: 'type', label: 'Sort: By type' },
  ];

  selectedOption: SortOption = this.options[0];

  constructor(private elementRef: ElementRef) {}

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: SortOption): void {
    this.selectedOption = option;
    this.isOpen = false;
    this.selectionChange.emit(option);
  }

  trackByValue(index: number, option: SortOption): string {
    return option.value;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
