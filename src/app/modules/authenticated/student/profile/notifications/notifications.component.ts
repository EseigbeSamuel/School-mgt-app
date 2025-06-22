import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notifications',
  imports: [RouterLink, SharedModule, CommonModule, FormsModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  toggleAll = false;

  notificationOptions = [
    { label: 'Phone notifications', checked: true },
    { label: 'Email push notifications', checked: true },
    { label: 'Subscribe to newsletter', checked: true },
    { label: 'New update from FlexyDemy', checked: false },
    { label: 'I want to know who viewed my course.', checked: true },
    {
      label: 'I want to know who write a review on my course.',
      checked: false,
    },
    { label: 'I want to know who commented on my lecture.', checked: true },
    { label: 'I want to know who download my lecture notes.', checked: false },
    { label: 'I want to know who replied on my comment.', checked: false },
    {
      label: 'I want to know daily how many people visited my profile.',
      checked: true,
    },
    {
      label: 'I want to know who download my lecture attach file.',
      checked: false,
    },
  ];

  toggleAllNotifications(): void {
    this.notificationOptions.forEach((option) => {
      option.checked = this.toggleAll;
    });
  }
}
