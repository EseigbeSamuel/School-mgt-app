import { Component } from '@angular/core';
import { InputUiComponent } from '../../../../../shared/components/input-ui/input-ui.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-referal',
  imports: [InputUiComponent, SharedModule, CommonModule, ModalComponent],
  templateUrl: './referal.component.html',
  styleUrl: './referal.component.css',
})
export class ReferalComponent {
  invisible = false;
  showModal = false;
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
