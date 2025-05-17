// auth.service.ts
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

type UserType = 'tutor' | 'student';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUserType = signal<UserType | null>(null);

  constructor(private router: Router) {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType === 'tutor' || storedUserType === 'student') {
      this.currentUserType.set(storedUserType);
    }
  }

  login(userType: UserType) {
    localStorage.setItem('userType', userType);
    this.currentUserType.set(userType);
    this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.removeItem('userType');
    this.currentUserType.set(null);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn() {
    return this.currentUserType() !== null;
  }

  getUserType() {
    return this.currentUserType();
  }
}
