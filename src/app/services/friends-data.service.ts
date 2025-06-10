import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FriendsDataService {
  private selectedFriends = new BehaviorSubject<any>(null);

  selectedFriends$ = this.selectedFriends.asObservable();
  selectFriends(friends: any) {
    this.selectedFriends.next(friends);
  }

  // setFriends(friends: any) {
  //   this.selectedFriends = friends;
  // }

  // getFriends() {
  //   return this.selectedFriends;
  // }

  constructor() {}
}
