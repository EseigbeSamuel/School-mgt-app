// sidebar.component.ts
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserTypeService } from '../../../services/user-type.service';
import { navItems as NAV_LINKS } from './data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgIcons } from '../../../utils/icons';

@Component({
  selector: 'app-sidebar',
  imports: [SharedModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  navItems: Array<any> = [];
  userType: string = 'student';

  constructor(
    private userTypeService: UserTypeService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  logOut() {
    this.router.navigate(['auth/log-in']);
  }

  ngOnInit() {
    this.navItems = NAV_LINKS.map((link) => ({
      ...link,
      safeSvg: this.sanitizer.bypassSecurityTrustHtml(SvgIcons[link.icon]),
    }));

    this.userTypeService.userType$.subscribe((type) => {
      this.userType = type;
    });
  }
}
