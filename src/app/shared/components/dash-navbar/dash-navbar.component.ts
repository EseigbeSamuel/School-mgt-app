import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { SidebarService } from '../../../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dash-navbar',
  imports: [SharedModule, CommonModule],
  templateUrl: './dash-navbar.component.html',
  styleUrl: './dash-navbar.component.css',
})
export class DashNavbarComponent {
  constructor(public sidebarService: SidebarService) {}
}
