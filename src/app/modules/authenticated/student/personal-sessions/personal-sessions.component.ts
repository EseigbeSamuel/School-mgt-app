import { Component } from '@angular/core';
import { InputUiComponent } from '../../../../shared/components/input-ui/input-ui.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-personal-sessions',
  imports: [InputUiComponent, SharedModule],
  templateUrl: './personal-sessions.component.html',
  styleUrl: './personal-sessions.component.css',
})
export class PersonalSessionsComponent {}
