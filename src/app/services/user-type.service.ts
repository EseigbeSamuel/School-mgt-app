import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

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

export const userTypeGuard = (
  requiredType: 'tutor' | 'student'
): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const userType = authService.getUserType();

    if (userType === requiredType) {
      return true;
    }

    router.navigate(['/access-denied']);
    return false;
  };
};
