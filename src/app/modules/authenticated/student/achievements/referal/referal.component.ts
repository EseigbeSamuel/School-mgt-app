import { Component } from '@angular/core';
import { InputUiComponent } from '../../../../../shared/components/input-ui/input-ui.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-referal',
  imports: [InputUiComponent, SharedModule, NgIf],
  templateUrl: './referal.component.html',
  styleUrl: './referal.component.css',
})
export class ReferalComponent {
  invisible = false;
}
