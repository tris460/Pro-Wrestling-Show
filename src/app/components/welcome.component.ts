import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <section id="welcome">
      <h1>Pro Wrestling Show</h1>
      <p>Welcome to the ultimate wrestling experience</p>
      <p class="description">Your premier destination for professional wrestling photography, news, and fighter profiles</p>
      <img src="assets/wrestlers1.png" alt="Wrestlers" class="welcome-image">
    </section>
  `,
  styles: [`
    #welcome {
      padding: 60px 20px;
      text-align: center;
      background-color: #1a1a1a;
      color: white;
    }
    h1 {
      margin-bottom: 20px;
    }
    .description {
      font-size: 18px;
      margin-top: 10px;
      opacity: 0.9;
    }
    .welcome-image {
      width: 80%;
      max-width: 400px;
      height: auto;
      margin-top: 30px;
      animation: fadeIn 2s ease-in;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class WelcomeComponent { }