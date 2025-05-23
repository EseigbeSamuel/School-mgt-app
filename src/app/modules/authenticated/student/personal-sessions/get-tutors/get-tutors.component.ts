import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InputUiComponent } from '../../../../../shared/components/input-ui/input-ui.component';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-get-tutors',
  imports: [InputUiComponent, SharedModule],
  templateUrl: './get-tutors.component.html',
  styleUrl: './get-tutors.component.css',
})
export class GetTutorsComponent {
  constructor(private router: Router) {}

  handleNavigate(event: Event) {
    event.preventDefault();
    this.router.navigate(['/student/personal-sessions/tutors']);
    console.log('Button clicked!', event);
  }
}
