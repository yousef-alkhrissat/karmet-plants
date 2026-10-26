import { useRef, useState } from 'react';
import { useScrollFrame } from '../hooks/useScrollFrame.js';

const notes = [
  'The desert rose, Adenium obesum. Karmet grows it in pots small enough for a windowsill.',
  'Its swollen trunk stores water, so it shrugs off an Amman August. It thickens a little every year.',
  'Then, on the driest days, it flowers pink. Kept well, it outlives most furniture.',
];

// One frame, three distances: the whole shrub, the trunk, the flowers.
export default function Showcase() {
  const ref = useRef(null);
  const [stage, setStage] = useState(1);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const sp = -r.top / (r.height - window.innerHeight);
    setStage(sp < 0.33 ? 1 : sp < 0.66 ? 2 : 3);
  });

  const cls = 'show' + (stage === 2 ? ' s2' : stage === 3 ? ' s3' : '');

  return (
    <section className={cls} id="show" aria-labelledby="show-h" ref={ref}>
      <div className="show-stage">
        <div className="show-inner">
          <h2 className="sr" id="show-h">Garden as though you live for ever</h2>
          <div className="show-h" aria-hidden="true">
            <span className="a">Garden as though</span>
            <span className="show-frame">
              <img src="assets/web/adenium-tanzania.jpg" width="1400" height="1050" loading="lazy" alt="A desert rose shrub with pink flowers growing among dark rocks" />
            </span>
            <span className="b">you live for ever</span>
          </div>
          <div className="show-notes" aria-live="polite">
            {notes.map((n, i) => <p key={i} className={stage === i + 1 ? 'on' : undefined}>{n}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
