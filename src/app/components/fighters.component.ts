import { Component } from '@angular/core';

@Component({
  selector: 'app-fighters',
  template: `
    <div style="width: 100%; background: var(--black); text-align: center; padding: 1rem 0;">
      <img src="assets/WWE_official_logo.svg" alt="WWE" class="wwe-logo">
    </div>
    <section id="fighters">
      <div class="fighters-grid">
        <div class="fighter-card">
          <img src="assets/john-cena.jpg" alt="John Cena" class="fighter-img">
          <div class="fighter-info">
            <h3>John Cena</h3>
            <p>John Felix Anthony Cena is an American professional wrestler, actor and author. During his wrestling career, Cena won 17 WWE world championships and became the wrestler with the most championships, surpassing Ric Flair's record.</p>
          </div>
        </div>
        <div class="fighter-card">
          <img src="assets/undertaker.jpg" alt="The Undertaker" class="fighter-img">
          <div class="fighter-info">
            <h3>The Undertaker</h3>
            <p>Mark William Calaway, known as The Undertaker, is a retired American professional wrestler and actor. He currently works as an ambassador for WWE. Calaway is an eight-time world champion, having won the WWF/E Championship four times, the World Heavyweight Championship three times and the USWA Unified World Heavyweight Championship once.</p>
          </div>
        </div>
        <div class="fighter-card">
          <img src="assets/edge.webp" alt="Edge" class="fighter-img">
          <div class="fighter-info">
            <h3>Edge</h3>
            <p>Adam Joseph Copeland is a Canadian professional wrestler and actor. He is known for having worked for WWE, where he competed under the name Edge, becoming considered one of the best professional wrestlers of all time, and where he also won a total of 31 championships.</p>
          </div>
        </div>
        <div class="fighter-card">
          <img src="assets/rey-mysterio.jpg" alt="Rey Mysterio" class="fighter-img">
          <div class="fighter-info">
            <h3>Rey Mysterio</h3>
            <p>Oscar Gutierrez, known as Rey Mysterio, is an American professional wrestler. Rey Mysterio was trained by his uncle Rey Misterio Sr., learning the aerial-based style of Mexican wrestling. Rey Mysterio is a 3-time World Champion, having won the World Heavyweight Championship twice and the WWE Championship once.</p>
          </div>
        </div>
        <div class="fighter-card">
          <img src="assets/big-show.jpg" alt="Big Show" class="fighter-img">
          <div class="fighter-info">
            <h3>Big Show</h3>
            <p>Paul Donald Wight II is an American professional wrestler and commentator, who works for All Elite Wrestling (AEW) under his real name. Wight is best known for his work for WWE, where he was known as The Big Show. Among his achievements are seven reigns as World Champion, two as WCW World Heavyweight Champion, one as ECW World Champion and two as WWE World Heavyweight Champion.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    #fighters {
      padding: 0px 20px;
      text-align: center;
      background-color: #f5f5f5;
    }
    .wwe-logo {
      height: 80px;
      width: auto;
      margin-bottom: 20px;
    }
    .fighters-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      max-width: 1200px;
      margin: 40px auto;
      justify-content: center;
    }
    .fighter-card {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.2s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      flex: 1 1 350px;
      max-width: 400px;
      background: var(--black);
    }
    .fighter-card:hover {
      transform: translateY(-4px);
    }
    .fighter-img {
      width: 100%;
      height: auto;
      min-height: 300px;
      object-fit: contain;
      background: var(--ultra-light-gray);
    }
    .fighter-info {
      position: absolute;
      bottom: -50px;
      left: 0;
      right: 0;
      padding: 80px 20px 50px;
      background: linear-gradient(transparent, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.9));
      color: var(--white);
      text-align: left;
    }
    .fighter-info h3 {
      color: var(--white);
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: bold;
    }
    .fighter-info p {
      color: rgba(255,255,255,0.9);
      line-height: 1.6;
      font-size: 14px;
    }
  `]
})
export class FightersComponent { }