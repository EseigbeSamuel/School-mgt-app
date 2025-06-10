// import { Component } from '@angular/core';
// import { InputUiComponent } from '../../../../shared/components/input-ui/input-ui.component';
// import { SharedModule } from '../../../../shared/shared.module';
// import { Router, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-personal-sessions',
//   imports: [InputUiComponent, SharedModule, RouterLink],
//   templateUrl: './personal-sessions.component.html',
//   styleUrl: './personal-sessions.component.css',
// })
// export class PersonalSessionsComponent {
//   constructor(private router: Router) {}

//   handleNavigate(event: Event) {
//     event.preventDefault();
//     this.router.navigate(['/student/personal-sessions/tutors']);
//     console.log('Button clicked!', event);
//   }
// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-personal-sessions',
  imports: [RouterOutlet],
  templateUrl: './personal-sessions.component.html',
  styleUrl: './personal-sessions.component.css',
})
export class PersonalSessionsComponent {}
