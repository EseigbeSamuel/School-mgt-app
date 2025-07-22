import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { SidebarService } from '../../../services/sidebar.service';
import { CommonModule, Location } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { filter, flatMap } from 'rxjs';
import { FriendsDataService } from '../../../services/friends-data.service';
import { CalenderComponent } from '../calender/calender.component';

@Component({
  selector: 'app-dash-navbar',
  imports: [SharedModule, CommonModule, RouterLink, CalenderComponent],
  templateUrl: './dash-navbar.component.html',
  styleUrl: './dash-navbar.component.css',
})
export class DashNavbarComponent implements OnInit {
  isCoursesRoute: boolean = false;
  constructor(
    public sidebarService: SidebarService,
    private router: Router,
    private friendsDataService: FriendsDataService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isCoursesRoute = event.urlAfterRedirects === '/student/courses';
      });
  }

  showModal = false;
  showNotification = false;
  showSchedule = false;
  showMessage = false;
  openNotification() {
    this.showNotification = true;
  }
  openModal() {
    this.showModal = true;
  }
  openMessage() {
    this.showMessage = true;
  }
  openSchedule() {
    this.showSchedule = true;
  }

  closeNotification() {
    this.showNotification = false;
  }
  closeModal() {
    this.showModal = false;
  }
  closeMessage() {
    this.showMessage = false;
  }
  closeSchedule() {
    this.showSchedule = false;
  }

  notifications = [
    {
      id: 1,
      type: 'gift',
      text: '✅ Congrats! You’ve completed 80% of your Physics lessons.',
      action: false,
    },
    {
      id: 2,
      type: 'chat',
      text: 'Patrick added a comment on English Waec',
      action: true,
    },
    {
      id: 3,
      type: 'gift',
      text: '✅ Congrats! You’ve completed 80% of your Physics lessons.',
      action: false,
    },
    {
      id: 4,
      type: 'class',
      text: 'Your group session, Mathematics begins in 24 hours',
      action: false,
    },
    {
      id: 5,
      type: 'sub',
      text: 'Your subscriptions going to expire soon, kindly make payment to continue your sessions.',
      action: false,
    },
  ];
  friend = [
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

  friends: any[] = [];

  // ngOnInit(): void {
  //   this.friends = this.friendsDataService.getFriends();
  // }

  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.friendsDataService.friendsList$.subscribe((friends) => {
      this.friends = friends;
    });
  }
}
