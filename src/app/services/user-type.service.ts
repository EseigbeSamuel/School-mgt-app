import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  private userTypeSubject = new BehaviorSubject<string>(
    localStorage.getItem('userType') || 'student'
  );
  userType$ = this.userTypeSubject.asObservable();

  setUserType(type: string) {
    localStorage.setItem('userType', type);
    this.userTypeSubject.next(type);
  }
}
