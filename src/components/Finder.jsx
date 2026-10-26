import { useEffect, useRef, useState } from 'react';
import { IG_DM, matches, plantById, plantImg } from '../data/plants.js';
import { prefersReducedMotion } from '../hooks/useScrollFrame.js';

const lights = [
  { value: 'sun', label: 'Sunny balcony' },
  { value: 'bright', label: 'Bright window' },
  { value: 'shade', label: 'Darker corner' },
];
const waterings = [
  { value: 'often', label: 'Every few days' },
  { value: 'weekly', label: 'Once a week' },
  { value: 'rarely', label: 'When I remember' },
];

function Options({ name, options, value, onChange }) {
  return (
    <div className="opts">
      {options.map((o) => (
        <label key={o.value}>
          <input type="radio" name={name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} />
          <span>{o.label}</span>
        </label>
      ))}
    </div>
  );
}

// The live thing: describe the spot and the watering habit, get a plant from the collection.
export default function Finder() {
  const [light, setLight] = useState('sun');
  const [water, setWater] = useState('weekly');
  const [shown, setShown] = useState(matches.sun.weekly);
  const [swap, setSwap] = useState(false);
  const timer = useRef(0);

  useEffect(() => {
    const next = matches[light][water];
    if (next === shown) return;
    if (prefersReducedMotion()) { setShown(next); return; }
    setSwap(true);
    timer.current = setTimeout(() => { setShown(next); setSwap(false); }, 280);
    return () => clearTimeout(timer.current);
  }, [light, water]); // eslint-disable-line react-hooks/exhaustive-deps

  const p = plantById[shown[0]];
  const also = plantById[shown[1]];

  return (
    <section className="finder" id="find" aria-labelledby="find-h">
      <div className="wrap grid">
        <h2 className="h2 rv" id="find-h">Which one is yours?</h2>
        <p className="finder-intro rv" style={{ '--i': 1 }}>Tell us about the spot and how you water. We’ll match you with a plant from the collection.</p>
        <form className="rv" style={{ '--i': 2 }} onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend>Where will it live?</legend>
            <Options name="light" options={lights} value={light} onChange={setLight} />
          </fieldset>
          <fieldset>
            <legend>How often do you water?</legend>
            <Options name="water" options={waterings} value={water} onChange={setWater} />
          </fieldset>
        </form>
        <div className={'result' + (swap ? ' swap' : '')} aria-live="polite">
          <div className="result-pic">
            <img src={plantImg(p)} width={p.w} height={p.h} alt={p.cap} loading="lazy" style={{ objectPosition: p.pos }} />
          </div>
          <div className="result-body">
            <h3>{p.name}</h3>
            <p>{p.text} {p.light}; water {p.water.toLowerCase()}.</p>
            <p className="also">Also happy there: {also.name}</p>
            <a className="btn" href={IG_DM} target="_blank" rel="noopener">
              Ask about the {p.name.toLowerCase()} <span className="arr" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
