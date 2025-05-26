import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  Input,
  HostListener,
  ElementRef,
  OnInit,
} from '@angular/core';

export interface SortOption {
  value: string;
  label: string;
  direction?: 'asc' | 'desc';
}

export interface SortConfig {
  field: string;
  direction: 'asc' | 'desc';
  label: string;
}

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrl: './sort-dropdown.component.css',
  imports: [CommonModule],
})
export class SortDropdownComponent implements OnInit {
  @Output() selectionChange = new EventEmitter<SortConfig>();
  @Input() customOptions?: SortOption[];
  @Input() defaultSort?: string;
  @Input() allowDirectionToggle: boolean = true;
  @Input() showDirectionInLabel: boolean = true;

  isOpen = false;

  defaultOptions: SortOption[] = [
    { value: 'date', label: 'Date', direction: 'desc' },
    { value: 'name', label: 'Name', direction: 'asc' },
    { value: 'size', label: 'Size', direction: 'desc' },
    { value: 'type', label: 'Type', direction: 'asc' },
  ];

  options: SortOption[] = [];
  selectedOption!: SortOption;
  currentDirection: 'asc' | 'desc' = 'asc';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.options = this.customOptions || this.defaultOptions;

    if (this.defaultSort) {
      const defaultOption = this.options.find(
        (opt) => opt.value === this.defaultSort
      );
      this.selectedOption = defaultOption || this.options[0];
    } else {
      this.selectedOption = this.options[0];
    }

    this.currentDirection = this.selectedOption.direction || 'asc';

    this.emitSelection();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: SortOption): void {
    const wasSelectedBefore = this.selectedOption.value === option.value;

    this.selectedOption = option;
    this.isOpen = false;

    if (wasSelectedBefore && this.allowDirectionToggle) {
      this.toggleDirection();
    } else {
      this.currentDirection = option.direction || 'asc';
    }

    this.emitSelection();
  }

  toggleDirection(): void {
    if (this.allowDirectionToggle) {
      this.currentDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
      this.emitSelection();
    }
  }

  private emitSelection(): void {
    const sortConfig: SortConfig = {
      field: this.selectedOption.value,
      direction: this.currentDirection,
      label: this.getDisplayLabel(),
    };
    this.selectionChange.emit(sortConfig);
  }

  getDisplayLabel(): string {
    const baseLabel = this.selectedOption.label;
    if (this.showDirectionInLabel) {
      const directionText = this.currentDirection === 'asc' ? '↑' : '↓';
      return `${baseLabel} ${directionText}`;
    }
    return baseLabel;
  }

  getOptionLabel(option: SortOption): string {
    return option.label;
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
