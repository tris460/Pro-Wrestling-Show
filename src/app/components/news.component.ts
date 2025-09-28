import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
    <section id="news">
      <h2>About the Founder</h2>
      <div class="founder-content">
        <img src="assets/jc.jpg" alt="JC - Founder" class="founder-img" #founderImg>
        <div class="founder-text">
          <p>I am the founder and operator of Pro Wrestling Show, a business dedicated to creating and delivering engaging and entertaining content for professional wrestling enthusiasts worldwide. With over two years of entrepreneurial experience, I oversee all facets of production, marketing, and finance, ensuring both the quality and profitability of the enterprise.</p>
          <p>In addition to my role as a business owner, I am a seasoned professional actor and YouTube content creator with more than 20 years in the entertainment industry. My extensive experience has honed my skills in communication, problem-solving, employee training, and public speaking, all of which I leverage to enhance my performance and foster effective collaboration. I am deeply passionate about expanding my horizons and exploring diverse genres and platforms, continually seeking new opportunities for learning and growth.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    #news {
      padding: 60px 20px;
      text-align: center;
      background-color: white;
    }
    h2 {
      margin-bottom: 40px;
      color: var(--blue);
    }
    .founder-content {
      display: flex;
      align-items: center;
      gap: 40px;
      max-width: 1000px;
      margin: 0 auto;
      text-align: left;
    }
    .founder-img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: 15px;
      flex-shrink: 0;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      opacity: 0;
      transform: translateY(30px);
    }
    .founder-img.animate {
      animation: fadeInUp 1.5s ease-out forwards;
    }
    .founder-img:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .founder-text {
      flex: 1;
    }
    .founder-text p {
      color: #555;
      line-height: 1.7;
      font-size: 16px;
      margin-bottom: 20px;
    }
    @media (max-width: 768px) {
      .founder-content {
        flex-direction: column;
        text-align: center;
      }
      .founder-img {
        width: 250px;
        height: 250px;
      }
    }
  `]
})
export class NewsComponent implements OnInit {
  @ViewChild('founderImg', { static: true }) founderImg!: ElementRef;

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.founderImg.nativeElement);
  }
}