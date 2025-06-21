import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-courses-listing',
  imports: [RouterLink],
  templateUrl: './admin-courses-listing.component.html',
  styleUrl: './admin-courses-listing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCoursesListingComponent {}
