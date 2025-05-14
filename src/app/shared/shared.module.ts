import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IntlPhoneInputComponent } from './components/intl-phone-input/intl-phone-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropSelectComponent } from './components/drop-select/drop-select.component';

@NgModule({
  declarations: [ButtonComponent, DropSelectComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [ButtonComponent, DropSelectComponent],
  providers: [],
})
export class SharedModule {}
