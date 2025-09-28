import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <section id="welcome">
      <h1>ProWrestling Show</h1>
      <p>Welcome to the ultimate wrestling experience</p>
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
  `]
})
export class WelcomeComponent { }