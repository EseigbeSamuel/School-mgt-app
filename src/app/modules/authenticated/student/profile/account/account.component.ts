import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IntlPhoneInputComponent } from '../../../../../shared/components/intl-phone-input/intl-phone-input.component';
import { InputUiComponent } from '../../../../../shared/components/input-ui/input-ui.component';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-account',
  imports: [RouterLink, InputUiComponent, SharedModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {}
