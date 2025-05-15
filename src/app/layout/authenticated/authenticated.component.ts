import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DashNavbarComponent } from '../../shared/components/dash-navbar/dash-navbar.component';

@Component({
  selector: 'app-authenticated',
  imports: [RouterModule, SidebarComponent, DashNavbarComponent],
  templateUrl: './authenticated.component.html',
  styleUrl: './authenticated.component.css',
})
export class AuthenticatedComponent {}
