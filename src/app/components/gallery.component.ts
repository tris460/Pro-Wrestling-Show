import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <section id="gallery">
    <h3>Fights are not only lived, they are also immortalized</h3>
      <div class="slider-container" (mouseenter)="pauseSlider()" (mouseleave)="resumeSlider()">
        <button class="nav-btn prev" (click)="prevSlide()">‹</button>
        <div class="slider" [style.transform]="'translateX(-' + (currentSlide * 100) + '%)'" #slider>
          <img src="assets/gallery1.jpg" alt="Gallery 1" class="slide" (click)="openFullscreen(0)">
          <img src="assets/gallery2.jpg" alt="Gallery 2" class="slide" (click)="openFullscreen(1)">
          <img src="assets/gallery3.jpg" alt="Gallery 3" class="slide" (click)="openFullscreen(2)">
          <img src="assets/gallery4.jpg" alt="Gallery 4" class="slide" (click)="openFullscreen(3)">
          <img src="assets/gallery5.jpg" alt="Gallery 5" class="slide" (click)="openFullscreen(4)">
        </div>
        <button class="nav-btn next" (click)="nextSlide()">›</button>
      </div>
      <div class="indicators">
        <span *ngFor="let img of images; let i = index" 
              class="dot" 
              [class.active]="i === currentSlide" 
              (click)="goToSlide(i)"></span>
      </div>
      <div class="thumbnails">
        <img *ngFor="let img of images; let i = index" 
             [src]="img" 
             [alt]="'Thumbnail ' + (i+1)" 
             class="thumbnail" 
             [class.active]="i === currentSlide"
             (click)="goToSlide(i)">
      </div>
      <div *ngIf="fullscreenImage !== null" class="fullscreen-overlay" (click)="closeFullscreen()">
        <img [src]="images[fullscreenImage]" alt="Fullscreen" class="fullscreen-img">
        <button class="close-btn" (click)="closeFullscreen()">×</button>
      </div>
    </section>
  `,
  styles: [`
    #gallery {
      padding: 60px 20px;
      text-align: center;
      background-color: #f5f5f5;
    }
    .slider-container {
      position: relative;
      max-width: 800px;
      margin: 30px auto;
      overflow: hidden;
      border-radius: 10px;
    }
    .slider {
      display: flex;
      transition: transform 0.5s ease;
    }
    .slide {
      width: 100%;
      height: 400px;
      object-fit: contain;
      flex-shrink: 0;
      background-color: #f5f5f5;
      cursor: pointer;
    }
    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
      font-size: 24px;
      padding: 10px 15px;
      cursor: pointer;
      z-index: 10;
      border-radius: 5px;
    }
    .nav-btn:hover {
      background: rgba(0,0,0,0.8);
    }
    .prev {
      left: 10px;
    }
    .next {
      right: 10px;
    }
    .indicators {
      margin: 20px 0;
    }
    .dot {
      height: 12px;
      width: 12px;
      margin: 0 5px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .dot.active, .dot:hover {
      background-color: var(--blue);
    }
    .thumbnails {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 20px 0;
      flex-wrap: wrap;
    }
    .thumbnail {
      width: 80px;
      height: 60px;
      object-fit: cover;
      border-radius: 5px;
      cursor: pointer;
      opacity: 0.6;
      transition: opacity 0.3s, transform 0.3s;
      border: 2px solid transparent;
    }
    .thumbnail:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
    .thumbnail.active {
      opacity: 1;
      border-color: var(--blue);
    }
    .fullscreen-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      cursor: pointer;
    }
    .fullscreen-img {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
    }
    .close-btn {
      position: absolute;
      top: 20px;
      right: 30px;
      background: none;
      border: none;
      color: white;
      font-size: 40px;
      cursor: pointer;
    }
    @keyframes slide {
      0%, 18% { transform: translateX(0); }
      20%, 38% { transform: translateX(-100%); }
      40%, 58% { transform: translateX(-200%); }
      60%, 78% { transform: translateX(-300%); }
      80%, 98% { transform: translateX(-400%); }
      100% { transform: translateX(0); }
    }
  `]
})
export class GalleryComponent implements OnInit, OnDestroy {
  images = ['assets/gallery1.jpg', 'assets/gallery2.jpg', 'assets/gallery3.jpg', 'assets/gallery4.jpg', 'assets/gallery5.jpg'];
  currentSlide = 0;
  fullscreenImage: number | null = null;
  isPaused = false;
  private autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (!this.isPaused) {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
      }
    }, 3000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  pauseSlider() {
    this.isPaused = true;
  }

  resumeSlider() {
    this.isPaused = false;
  }

  openFullscreen(index: number) {
    this.fullscreenImage = index;
  }

  closeFullscreen() {
    this.fullscreenImage = null;
  }
}