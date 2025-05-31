import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { RouterLink } from '@angular/router';
import { InputUiComponent } from '../../../../../shared/components/input-ui/input-ui.component';
import { IntlPhoneInputComponent } from '../../../../../shared/components/intl-phone-input/intl-phone-input.component';

@Component({
  selector: 'app-edit-profile',
  imports: [
    SharedModule,
    RouterLink,
    InputUiComponent,
    IntlPhoneInputComponent,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {}
