import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export interface PaginationMetadata {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
  imports: [CommonModule],
})
export class PaginatorComponent implements OnInit, OnDestroy {
  @Input() metadata!: PaginationMetadata;
  @Input() showText!: boolean;

  currentPage = 1;
  pageSize = 10;
  totalPages = 0;
  pages: number[] = [];
  private queryParamSubscription!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.queryParamSubscription = this.route.queryParams.subscribe((params) => {
      this.currentPage = Number(params['page']) || 1;
      this.pageSize = Number(params['limit']) || 10;
      this.updatePagination();
    });
  }

  ngOnChanges(): void {
    this.updatePagination();
  }

  ngOnDestroy(): void {
    if (this.queryParamSubscription) {
      this.queryParamSubscription.unsubscribe();
    }
  }

  private updatePagination(): void {
    if (this.metadata) {
      this.totalPages = this.metadata.totalPages;

      this.pages = this.getVisiblePageNumbers();
    }
  }

  private getVisiblePageNumbers(): number[] {
    const visiblePages: number[] = [];
    const maxVisiblePages = 3;

    if (this.totalPages <= maxVisiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      let startPage = Math.max(
        1,
        this.currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = startPage + maxVisiblePages - 1;

      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
      }

      if (startPage > 1) {
        visiblePages.unshift(-1);
        visiblePages.unshift(1);
      }

      if (endPage < this.totalPages) {
        visiblePages.push(-1);
        visiblePages.push(this.totalPages);
      }
    }

    return visiblePages;
  }

  goToPage(page: number): void {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.navigateToPage(page);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.navigateToPage(this.currentPage + 1);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.navigateToPage(this.currentPage - 1);
    }
  }

  private navigateToPage(page: number): void {
    const queryParams = { ...this.route.snapshot.queryParams, page };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
