import { useEffect, useRef, useState } from 'react';
import { plants, plantById, plantImg } from '../data/plants.js';

// Sticky photograph on the left, the list on the right: the active row swaps the photograph.
export default function Collection() {
  const [active, setActive] = useState('olive');
  const listRef = useRef(null);
  const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

  // the row crossing the middle of the screen becomes active while scrolling
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.dataset.id); });
    }, { rootMargin: '-48% 0px -48% 0px' });
    listRef.current.querySelectorAll('.plant').forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, []);

  return (
    <section className="collection wrap" id="plants" aria-labelledby="plants-h">
      <div className="grid">
        <div className="col-head">
          <h2 className="h2 rv" id="plants-h">The collection</h2>
          <p className="rv" style={{ '--i': 1 }}>Nine plants Karmet grows most often. Tap one for its care, then ask on Instagram for what’s in stock and in which size.</p>
        </div>
        <div className="col-pic">
          <div className="col-frame" aria-hidden="true">
            {plants.map((p) => (
              <img key={p.id} className={p.id === active ? 'on' : undefined} src={plantImg(p)} width={p.w} height={p.h}
                alt="" loading="lazy" decoding="async" style={{ objectPosition: p.pos }} />
            ))}
          </div>
          <p className="cap">{plantById[active].cap}</p>
        </div>
        <div className="col-list">
          <ul ref={listRef}>
            {plants.map((p, i) => {
              const on = p.id === active;
              // active state lives in data-on: changing className would wipe the reveal class
              return (
                <li key={p.id} className="plant rv" data-on={on || undefined} style={{ '--i': Math.min(i, 6) }} data-id={p.id}
                  onMouseEnter={canHover ? () => setActive(p.id) : undefined}>
                  <button type="button" aria-expanded={on} aria-controls={`more-${p.id}`}
                    onClick={() => setActive(p.id)} onFocus={() => setActive(p.id)}>
                    <span className="nm">{p.name}</span>
                    <span className="lat">{p.lat}</span>
                  </button>
                  <div className="more" id={`more-${p.id}`}>
                    <div>
                      <p>{p.text}</p>
                      <dl>
                        <div><dt>Light</dt><dd>{p.light}</dd></div>
                        <div><dt>Water</dt><dd>{p.water}</dd></div>
                      </dl>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
