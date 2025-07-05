import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsDataService } from '../../../../../services/friends-data.service';
import { ChatSideComponent } from '../chat-side/chat-side.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-sidebar',
  imports: [ChatSideComponent, CommonModule, FormsModule],
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
  isActiveFriend(id: any): boolean {
    return this.router.url.includes(`/dashboard/messages/friends/${id}`);
  }
  activeFriendId: string | null = null;

  // onSelectFriends(friend: any) {
  //   // Navigate and select
  //   if (window.innerWidth < 768) {
  //     this.router.navigate(['/dashboard/messages/friends', friend.id]);
  //   } else {
  //     this.router.navigate(['/dashboard/messages/friends', friend.id]); // Optional for desktop
  //   }
  // }

  // isActiveFriend(id: any): boolean {
  //   return this.activeFriendId === String(id);
  // }
  //  ngOnInit() {
  //   // Subscribe to router events to detect active route changes
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe(() => {
  //       const urlParts = this.router.url.split('/');
  //       this.activeFriendId = urlParts[urlParts.length - 1];
  //     });
  // }

  friends = [
    {
      id: 1,
      name: 'wike benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: true,
      type: 'tutor',
    },
    {
      id: 2,
      name: 'bola james',
      image: '/assets/images/tutor-students-image.png',
      active: false,
      type: 'student',
    },
    {
      id: 3,
      name: 'cooper smith',
      image: '/assets/images/tutor-students-image.png',
      active: true,
      type: 'tutor',
    },
    {
      id: 4,
      name: 'anita maxwen',
      image: '/assets/images/tutor-students-image.png',
      active: true,
      type: 'student',
    },
    {
      id: 5,
      name: 'bonnie blue',
      image: '/assets/images/tutor-students-image.png',
      active: true,
      type: 'tutor',
    },
    {
      id: 6,
      name: 'angelina white',
      image: '/assets/images/tutor-students-image.png',
      active: false,
      type: 'student',
    },
    {
      id: 7,
      name: 'ahmed musa',
      image: '/assets/images/tutor-students-image.png',
      active: false,
      type: 'tutor',
    },
    {
      id: 8,
      name: 'david babalola',
      image: '/assets/images/tutor-students-image.png',
      active: false,
      type: 'student',
    },
  ];
  currentFilter = 'all';
  searchTerm: string = '';

  setFilter(filter: string) {
    this.currentFilter = filter;
  }

  // filteredFriends() {
  //   if (this.currentFilter === 'all') return this.friends;
  //   return this.friends.filter(
  //     (friends) => friends.type === this.currentFilter
  //   );
  // }
  filteredFriends() {
    return this.friends.filter((friends) => {
      const matchesType =
        this.currentFilter === 'all' || friends.type === this.currentFilter;

      const matchesSearch = friends.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      return matchesType && matchesSearch;
    });
  }

  getButtonClasses(filter: string) {
    const base = 'py-[10px] px-[14px] w-[100px] hover:bg-[#FBFBFB] rounded-xl';
    const isActive = this.currentFilter === filter;
    return isActive
      ? `${base} bg-[#FBFBFB] rounded-xl`
      : `${base} hover:bg-[#FBFBFB] rounded-xl`;
  }
}
