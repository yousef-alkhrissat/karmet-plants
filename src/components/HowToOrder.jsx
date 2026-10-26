import { IG_PROFILE } from '../data/plants.js';

const steps = [
  { id: 'v1', verb: 'Choose', src: 'assets/web/monstera-1400.jpg', big: 'assets/web/monstera-2560.jpg 2560w', w: 2560, h: 1920,
    alt: 'Large split leaves of a Swiss cheese plant', cap: 'Swiss cheese plant',
    text: <>Pick from the collection above, or browse the highlights on <a className="link" href={IG_PROFILE} target="_blank" rel="noopener">@karmet_plants</a>.</> },
  { id: 'v2', verb: 'Message', src: 'assets/web/amman-stairs-1400.jpg', big: 'assets/web/amman-stairs-1832.jpg 1832w', w: 1832, h: 3264, pos: '50% 40%',
    alt: 'A man climbing a long limestone stairway between shops in old Amman', cap: 'A stairway in old Amman',
    text: 'Send a DM with the plant and the size you want. You’ll hear back with what’s ready and how to get it to you in Amman.' },
  { id: 'v3', verb: 'Grow', src: 'assets/web/ancient-olive-ajloun-1400.jpg', big: 'assets/web/ancient-olive-ajloun-2560.jpg 2560w', w: 2560, h: 1920,
    alt: 'A hollow, centuries-old olive tree in the hills of Ajloun', cap: 'An ancient olive tree, Ajloun',
    text: 'Take it home with care notes for your spot. Then give it a few decades, like this olive in Ajloun.' },
];

// One verb at a time: each word holds the centre while its photograph passes behind it.
export default function HowToOrder() {
  return (
    <div className="verbs" id="order">
      {steps.map((s) => (
        <section className="verb" aria-labelledby={s.id} key={s.id}>
          <img src={s.src} srcSet={`${s.src} 1400w, ${s.big}`} sizes="100vw" width={s.w} height={s.h} loading="lazy" alt={s.alt} style={s.pos ? { objectPosition: s.pos } : undefined} />
          <div className="verb-word"><h2 id={s.id}>{s.verb}</h2></div>
          <p className="verb-text">{s.text}</p>
          <p className="verb-cap">{s.cap}</p>
        </section>
      ))}
    </div>
  );
}
