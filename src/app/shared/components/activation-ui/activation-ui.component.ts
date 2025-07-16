import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activation-ui',
  imports: [SharedModule],
  templateUrl: './activation-ui.component.html',
  styleUrl: './activation-ui.component.css',
})
export class ActivationUiComponent {
  constructor(private router: Router) {}
  handleNavigate(event: Event) {
    this.router.navigate(['/auth/mail-reg']);
  }
}
