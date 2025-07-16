import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  PaginationMetadata,
  PaginatorComponent,
} from '../../../../shared/components/paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { TutorSesionComponentTable } from '../../../../shared/components/tables/tutor-sesion/tutor-sesion.component';
import { sessions, students } from './data';
import {
  SortConfig,
  SortDropdownComponent,
  SortOption,
} from '../../../../shared/components/sort-dropdown/sort-dropdown.component';
@Component({
  selector: 'app-my-sessions',
  imports: [
    SharedModule,
    PaginatorComponent,
    CommonModule,
    TutorSesionComponentTable,
  ],
  templateUrl: './my-sessions.component.html',
  styleUrl: './my-sessions.component.css',
})
export class MySessionsComponent {
  studentData = students;
  sessionData = sessions;

  paginationMetadata: PaginationMetadata = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    totalItems: 0,
  };

  onSortChange(sortConfig: SortConfig): void {
    console.log(
      `Sorting by ${sortConfig.field} in ${sortConfig.direction} order`
    );
    // Apply sorting logic here
  }

  currentView: string = 'all sessions';

  setView(view: string) {
    this.currentView = view;
  }
  getButtonStyle(view: string) {
    const base = 'py-[10px] px-[14px] w-full hover:bg-[#FBFBFB] rounded-xl';
    const isActive = this.currentView === view;
    return isActive
      ? `${base} bg-[#FBFBFB] rounded-xl`
      : `${base} hover:bg-[#FBFBFB] rounded-xl`;
  }
}
