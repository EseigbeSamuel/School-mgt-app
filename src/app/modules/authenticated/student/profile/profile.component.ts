import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [SharedModule, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
