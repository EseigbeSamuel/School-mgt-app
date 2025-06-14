import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserTypeService } from '../services/user-type.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private userTypeService: UserTypeService
  ) {}
  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const userRole = await firstValueFrom(this.userTypeService.userType$);
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
