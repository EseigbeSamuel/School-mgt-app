import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tutor-wallet',
  imports: [SharedModule, CommonModule, RouterModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
})
export class TutorWalletComponent {}
