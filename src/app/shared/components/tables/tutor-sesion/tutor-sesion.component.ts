import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tutor-sesion',
  imports: [CommonModule],
  templateUrl: './tutor-sesion.component.html',
  styleUrl: './tutor-sesion.component.css',
})
export class TutorSesionComponentTable {
  @Input() data: any[] = [];
}
