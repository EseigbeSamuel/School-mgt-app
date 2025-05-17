import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import {
  SIDEBAR_LINKS_DASHBOARD_TOP,
  SIDEBAR_LINKS_DASHBOARD_BUTTON,
  SIDEBAR_LINKS_MOBILE,
  SidebarLink,
} from './data';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserTypeService } from '../../../services/user-type.service';

@Component({
  selector: 'app-sidebar',
  imports: [SharedModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarLinksTop: SidebarLink[] = SIDEBAR_LINKS_DASHBOARD_TOP;
  sidebarLinksButtom: SidebarLink[] = SIDEBAR_LINKS_DASHBOARD_BUTTON;
  sidebarLinksMobile: SidebarLink[] = SIDEBAR_LINKS_MOBILE;

  userType: string = 'student';

  constructor(
    private userTypeService: UserTypeService,
    private router: Router
  ) {}

  logOut() {
    this.router.navigate(['auth/log-in']);
  }

  ngOnInit() {
    this.userTypeService.userType$.subscribe((type) => {
      this.userType = type;
    });
  }
}
