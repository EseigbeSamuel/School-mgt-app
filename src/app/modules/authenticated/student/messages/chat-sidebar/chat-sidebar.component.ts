import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsDataService } from '../../../../../services/friends-data.service';
import { ChatSideComponent } from '../chat-side/chat-side.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-chat-sidebar',
  imports: [ChatSideComponent, NgIf, NgFor],
  templateUrl: './chat-sidebar.component.html',
  styleUrl: './chat-sidebar.component.css',
})
export class ChatSidebarComponent {
  constructor(
    private router: Router,
    private friendsDataService: FriendsDataService
  ) {}

  onSelectFriends(friends: any) {
    this.friendsDataService.selectFriends(friends);
    if (window.innerWidth < 768) {
      this.router.navigate(['/dashboard/messages/friends', friends.id]);
    }
  }

  friends = [
    {
      id: 1,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: true,
    },
    {
      id: 2,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: false,
    },
    {
      id: 3,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: true,
    },
    {
      id: 4,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: true,
    },
    {
      id: 5,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: true,
    },
    {
      id: 6,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: false,
    },
    {
      id: 7,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: false,
    },
    {
      id: 8,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: false,
    },
  ];
}
