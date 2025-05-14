import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
})
export class SplashScreenComponent implements OnInit, OnDestroy {
  currentPage = 1;
  totalPages = 3;
  showSplash = true;
  readonly radius = 22;
  readonly circumference = 2 * Math.PI * this.radius;
  circleOffset = this.circumference;

  private autoSlideInterval: any;
  private isBrowser: boolean;
  splashPages = [
    {
      image: '/assets/splash-screen&register/images/components/Caroul1.svg',
      alt: 'Personalized Learning',
      title: 'Personalized Learning Made Easy',
      subtitle: 'Made Easy',
      description:
        'Get a tailored study plan that helps you focus on your weak areas.',
    },
    {
      image: '/assets/images/splash2.png',
      alt: 'Track Progress',
      title: 'Track Your Progress',
      subtitle: '',
      description: 'Monitor your improvements with visual tracking.',
    },
    {
      image: '/assets/images/splash3.png',
      alt: 'Get Started',
      title: 'Ready to Start?',
      subtitle: '',
      description: 'Begin your learning journey today.',
    },
  ];
  constructor(@Inject(PLATFORM_ID) platformId: Object, private router: Router) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      document.body.classList.add('bg-[#DCE8EF]', 'overflow-hidden');
      this.updateCircleProgress();
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.clearAutoSlide();
    if (this.isBrowser) {
      document.body.classList.remove('bg-[#DCE8EF]', 'overflow-hidden');
    }
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextPage();
    }, 3000); // rotate every 3 seconds
  }

  private clearAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  private updateCircleProgress() {
    const progress = this.currentPage / this.totalPages;
    this.circleOffset = this.circumference * (1 - progress);
  }

  nextPage() {
    this.currentPage =
      this.currentPage < this.totalPages ? this.currentPage + 1 : 1;
    this.updateCircleProgress();
  }

  prevPage() {
    this.currentPage =
      this.currentPage > 1 ? this.currentPage - 1 : this.totalPages;
    this.updateCircleProgress();
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateCircleProgress();
    }
  }
  getArrowRotation(): string {
    switch (this.currentPage) {
      case 1:
        return 'rotate(180deg)'; // points left
      case 2:
        return 'rotate(270deg)'; // points down
      case 3:
        return 'rotate(360deg)'; // points right
      default:
        return 'rotate(0deg)';
    }
  }

  skipSplash() {
    this.showSplash = false;
    this.clearAutoSlide();
    this.router.navigate(['/auth/register']);
  }
}
