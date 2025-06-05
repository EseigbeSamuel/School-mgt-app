import { Component } from '@angular/core';
import { InputUiComponent } from '../../../../shared/components/input-ui/input-ui.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [NgFor, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  friends = [
    {
      friendId: 1,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: true,
    },
    {
      friendId: 2,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: false,
    },
    {
      friendId: 3,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: true,
    },
    {
      friendId: 4,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: true,
    },
    {
      friendId: 5,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: true,
    },
    {
      friendId: 6,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: false,
    },
    {
      friendId: 7,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: false,
    },
    {
      friendId: 8,
      name: 'ajibola benjamin',
      image: '/assets/images/tutor-students-image.png',
      active: false,
    },
  ];
}
