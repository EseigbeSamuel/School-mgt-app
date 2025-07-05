import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SortDropdownComponent } from "../../../../../shared/components/sort-dropdown/sort-dropdown.component";

@Component({
  selector: 'app-admin-session-calender',
  imports: [SortDropdownComponent],
  templateUrl: './admin-session-calender.component.html',
  styleUrl: './admin-session-calender.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSessionCalenderComponent { }
