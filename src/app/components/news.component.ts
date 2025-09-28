import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
    <section id="news">
      <h2>News</h2>
      <p>Latest wrestling news</p>
    </section>
  `,
  styles: [`
    #news {
      padding: 60px 20px;
      text-align: center;
      background-color: white;
    }
    h2 {
      margin-bottom: 20px;
    }
  `]
})
export class NewsComponent { }