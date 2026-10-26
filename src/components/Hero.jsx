import { useRef } from 'react';
import { IG_DM } from '../data/plants.js';
import { useScrollFrame, prefersReducedMotion } from '../hooks/useScrollFrame.js';

// The hero: an arch-shaped window, like the doors of the old stone houses, that opens to the edges on scroll.
export default function Hero() {
  const ref = useRef(null);

  useScrollFrame(() => {
    const hero = ref.current;
    if (!hero) return;
    const reduce = prefersReducedMotion();
    const vw = window.innerWidth, vh = window.innerHeight, phone = vw <= 1000;

    let w, h, top;
    if (phone) {
      w = vw * 0.78; h = w * 1.25; top = Math.max(vh * 0.3, 190);
      if (top + h > vh - 150) { h = vh - 150 - top; w = h / 1.25; }
    } else {
      w = vw * 0.36; h = w * 1.25;
      if (h > vh - 220) { h = vh - 220; w = h / 1.25; }
      top = (vh - h) / 2 + 10;
    }
    const left = (vw - w) / 2;
    const r = hero.getBoundingClientRect();
    const p = reduce ? 1 : Math.min(1, Math.max(0, -r.top / (vh * (phone ? 0.7 : 1))));
    const e = 1 - Math.pow(1 - p, 2.2);
    const t = top * (1 - e), l = left * (1 - e), b = (vh - top - h) * (1 - e), rad = (w / 2) * (1 - e);
    const fade = reduce ? 0 : Math.min(1, p / 0.45);

    const s = hero.style;
    s.setProperty('--clip', `inset(${t}px ${l}px ${b}px ${l}px round ${rad}px ${rad}px 0 0)`);
    s.setProperty('--win-bottom', top + h + 'px');
    s.setProperty('--zoom', (1.12 - 0.12 * e).toFixed(4));
    s.setProperty('--texto', (1 - fade).toFixed(3));
    s.setProperty('--texty', -40 * fade + 'px');
    s.setProperty('--capo', Math.max(0, (p - 0.8) / 0.2).toFixed(3));
    document.documentElement.style.setProperty('--nav-o', (1 - fade).toFixed(3));
  });

  return (
    <section className="hero" aria-label="Karmet Plants" ref={ref}>
      <div className="hero-stage">
        <div className="hero-pic">
          <img src="assets/web/hero-nicosia-2560.jpg" srcSet="assets/web/hero-nicosia-1400.jpg 1400w, assets/web/hero-nicosia-2560.jpg 2560w"
            sizes="100vw" width="2560" height="1910" fetchPriority="high"
            alt="Magenta bougainvillea spilling over a pale stone wall with a balustrade" />
          <div className="hero-scrim" />
        </div>
        <div className="hero-text">
          <div className="hero-title">
            <h1>Karmet Plants</h1>
            <p lang="ar">كرمة المحبوب</p>
          </div>
          <div className="hero-side">
            <p>Houseplants, cacti and desert roses, grown and potted in Amman. Order by message on Instagram.</p>
            <a className="btn" href={IG_DM} target="_blank" rel="noopener">Message us <span className="arr" aria-hidden="true">→</span></a>
          </div>
        </div>
        <p className="hero-cap">Bougainvillea, the colour of every Amman summer wall</p>
      </div>
    </section>
  );
}
