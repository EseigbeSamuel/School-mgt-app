import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pre-register.component.html',
  styleUrl: './pre-register.component.css',
})
export class PreRegisterComponent {
  activeTab: 'tutor' | 'student' = 'tutor';

  constructor(private router: Router) {}

  signUp() {
    if (this.activeTab === 'tutor') {
      localStorage.setItem('userType', 'tutor');
    } else {
      localStorage.setItem('userType', 'student');
    }
    this.router.navigate(['auth/sign-up']);
  }
  login() {
    this.router.navigate(['auth/log-in']);
  }

  students = [
    { name: 'Kelvin', image: '../../../assets/images/student-image-1.png' },
    { name: 'Blessing', image: '../../../assets/images/blessing.jpg' },
    { name: 'Ngozi', image: '../../../assets/images/ngozi.jpg' },
    { name: 'Romoke', image: '../../../assets/images/romoke.jpg' },
    { name: 'Adeleke', image: '../../../assets/images/adeleke.jpg' },
    { name: 'Tunde', image: '../../../assets/images/tunde.jpg' },
  ];
}
