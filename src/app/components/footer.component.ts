import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <img src="assets/logo-dark.png" alt="JC Pro Wrestling Show" class="footer-logo">
      <div class="social-links">
        <a href="https://www.facebook.com/p/Justin-Clappers-Pro-Wrestling-Show-100070594244644/" target="_blank" class="social-icon">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/jcprowrestlingshow/" target="_blank" class="social-icon">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="mailto:justin@prowrestlingshow.com" class="social-icon">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://www.tiktok.com/@jcprowrestle?lang=en" target="_blank" class="social-icon">
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
      <p>&copy; 2025 Pro Wrestling Show. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #201c1d;
      color: white;
      padding: 40px 20px;
      text-align: center;
    }
    .footer-logo {
      height: 200px;
      width: auto;
      margin-bottom: 20px;
      border-radius: 8px;
    }
    .social-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
    }
    .social-icon {
      color: white;
      font-size: 24px;
      transition: color 0.3s ease;
      text-decoration: none;
    }
    .social-icon:hover {
      color: var(--red);
    }
  `]
})
export class FooterComponent { }