import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <section id="gallery">
      <h2>Gallery</h2>
      <p>Amazing wrestling photos</p>
    </section>
  `,
  styles: [`
    #gallery {
      padding: 60px 20px;
      text-align: center;
      background-color: #f5f5f5;
    }
    h2 {
      margin-bottom: 20px;
    }
  `]
})
export class GalleryComponent { }