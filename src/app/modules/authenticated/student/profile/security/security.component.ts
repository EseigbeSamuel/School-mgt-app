import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { InputUiComponent } from '../../../../../shared/components/input-ui/input-ui.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-security',
  imports: [SharedModule, InputUiComponent, RouterLink],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css',
})
export class SecurityComponent {}
