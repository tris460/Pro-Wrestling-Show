import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <img src="assets/site-logo.jpg" alt="ProWrestling Show" class="logo">
    </header>
  `,
  styles: [`
    header {
      background-color: var(--ultra-light-gray);
      padding: 20px;
      text-align: center;
    }
    .logo {
      max-width: 300px;
      height: auto;
      animation: fadeIn 1.5s ease-in;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class HeaderComponent { }