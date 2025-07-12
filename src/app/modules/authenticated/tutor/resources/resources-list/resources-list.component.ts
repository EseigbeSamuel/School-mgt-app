import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  SortConfig,
  SortDropdownComponent,
  SortOption,
} from '../../../../../shared/components/sort-dropdown/sort-dropdown.component';
import { ModalComponent } from '../../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-resources-list',
  imports: [
    SharedModule,
    CommonModule,
    RouterLink,
    SortDropdownComponent,
    ModalComponent,
  ],
  templateUrl: './resources-list.component.html',
  styleUrl: './resources-list.component.css',
})
export class ResourcesListComponent {
  customSortOptions: SortOption[] = [
    { value: 'class', label: 'Class', direction: 'desc' },
    { value: 'name', label: 'Name', direction: 'desc' },
    { value: 'grade', label: 'Grade', direction: 'asc' },
  ];

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  showModal = false;

  onSortChange(sortConfig: SortConfig): void {
    console.log(
      `Sorting by ${sortConfig.field} in ${sortConfig.direction} order`
    );
    // Apply sorting logic here
  }

  currentFilter = 'all';
  searchTerm: string = '';

  setFilter(filter: string) {
    this.currentFilter = filter;
  }

  // filteredFriends() {
  //   return this.friends.filter((friends) => {
  //     const matchesType =
  //       this.currentFilter === 'all' || friends.type === this.currentFilter;

  //     const matchesSearch = friends.name
  //       .toLowerCase()
  //       .includes(this.searchTerm.toLowerCase());

  //     return matchesType && matchesSearch;
  //   });
  // }

  getButtonClasses(filter: string) {
    const base = 'py-[10px] px-[14px] w-full hover:bg-[#FBFBFB] rounded-xl';
    const isActive = this.currentFilter === filter;
    return isActive
      ? `${base} bg-[#FBFBFB] rounded-xl`
      : `${base} hover:bg-[#FBFBFB] rounded-xl`;
  }
}
