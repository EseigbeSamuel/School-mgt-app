import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FriendsDataService {
  private selectedFriends = new BehaviorSubject<any>(null);
  private friendsList = new BehaviorSubject<any[]>([]);

  selectedFriends$ = this.selectedFriends.asObservable();
  friendsList$ = this.friendsList.asObservable();
  selectFriends(friends: any) {
    this.selectedFriends.next(friends);
  }

  setFriends(friends: any[]) {
    this.friendsList.next(friends);
  }

  // getFriends() {
  //   return this.selectedFriends;
  // }

  constructor() {}
}
