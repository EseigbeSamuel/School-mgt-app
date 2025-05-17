import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-dash-navbar',
  imports: [SharedModule],
  templateUrl: './dash-navbar.component.html',
  styleUrl: './dash-navbar.component.css',
})
export class DashNavbarComponent {}
