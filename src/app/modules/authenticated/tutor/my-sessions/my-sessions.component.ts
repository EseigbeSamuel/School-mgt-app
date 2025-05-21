import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  PaginationMetadata,
  PaginatorComponent,
} from '../../../../shared/components/paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { TutorSesionComponentTable } from '../../../../shared/components/tables/tutor-sesion/tutor-sesion.component';
import { SessionTableComponent } from '../../../../shared/components/tutor-components/session-table/session-table.component';
import { students } from './data';
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

  paginationMetadata: PaginationMetadata = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    totalItems: 0,
  };
}
