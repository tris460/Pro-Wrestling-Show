import { Component } from '@angular/core';

@Component({
  selector: 'app-fighters',
  template: `
    <section id="fighters">
      <h2>Fighters</h2>
      <p>Meet our wrestlers</p>
    </section>
  `,
  styles: [`
    #fighters {
      padding: 60px 20px;
      text-align: center;
      background-color: #f5f5f5;
    }
    h2 {
      margin-bottom: 20px;
    }
  `]
})
export class FightersComponent { }