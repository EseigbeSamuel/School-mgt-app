import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  PaginationMetadata,
  PaginatorComponent,
} from '../../../../shared/components/paginator/paginator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-sessions',
  imports: [SharedModule, PaginatorComponent, CommonModule],
  templateUrl: './my-sessions.component.html',
  styleUrl: './my-sessions.component.css',
})
export class MySessionsComponent {
  paginationMetadata: PaginationMetadata = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    totalItems: 0,
  };
}
