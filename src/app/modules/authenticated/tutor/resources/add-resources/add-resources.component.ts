import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-resources',
  imports: [SharedModule, RouterModule],
  templateUrl: './add-resources.component.html',
  styleUrl: './add-resources.component.css',
})
export class AddResourcesComponent {}
