import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      const userType = localStorage.getItem('userType');

      if (userType) {
        console.log('User Type:', userType);
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/auth']);
      }
    }, 2000);
  }
}
