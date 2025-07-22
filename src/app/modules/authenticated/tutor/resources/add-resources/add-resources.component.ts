import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-add-resources',
  imports: [SharedModule, RouterModule, FormsModule, QuillModule],
  templateUrl: './add-resources.component.html',
  styleUrl: './add-resources.component.css',
})
export class AddResourcesComponent {
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Selected file:', file.name);
      // You can upload or preview it here
    }
  }
  content: string = '';
}
