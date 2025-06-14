import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userRole = this.authService.getUserRole();
    const allowedRoles = route.data['roles'] as string[];

    if (!userRole) {
      this.router.navigate(['/login']);
      return false;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }
}
