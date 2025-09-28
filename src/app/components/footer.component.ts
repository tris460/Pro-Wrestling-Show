import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>&copy; 2024 ProWrestling Show. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #1a1a1a;
      color: white;
      padding: 20px;
      text-align: center;
    }
  `]
})
export class FooterComponent { }