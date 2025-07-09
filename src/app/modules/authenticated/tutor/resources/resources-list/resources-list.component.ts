import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resources-list',
  imports: [SharedModule, CommonModule, RouterLink],
  templateUrl: './resources-list.component.html',
  styleUrl: './resources-list.component.css',
})
export class ResourcesListComponent {}
