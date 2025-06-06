import { Component, OnInit } from '@angular/core';
import { FriendsDataService } from '../../../../../services/friends-data.service';
import { Location, NgIf } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-side',
  imports: [NgIf, SharedModule],
  templateUrl: './chat-side.component.html',
  styleUrl: './chat-side.component.css',
})
export class ChatSideComponent implements OnInit {
  friends: any;
  constructor(
    private friendsDataService: FriendsDataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // ngOnInit(): void {
  //   this.friends = this.friendsDataService.getFriends();
  // }

  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.friendsDataService.selectedFriends$.subscribe((friends) => {
      this.friends = friends;
    });
  }
}
