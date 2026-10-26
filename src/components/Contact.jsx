import { IG_DM, IG_PROFILE } from '../data/plants.js';

const HANDLE = '@karmet_plants';

export default function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-h">
      <div className="grid contact-top">
        <div className="contact-say">
          <p>Ask what’s in stock, about sizes, or for a plant that suits a difficult corner.</p>
          <div className="contact-foot">
            <p>Amman, Jordan · Plants and cactus</p>
            <ul>
              <li><a className="link" href={IG_PROFILE} target="_blank" rel="noopener">Instagram</a></li>
              <li><a className="link" href={IG_DM} target="_blank" rel="noopener">Send a message</a></li>
            </ul>
          </div>
        </div>
        <figure>
          <img src="assets/web/cactus-pot.webp" width="1024" height="683" loading="lazy" alt="A hand holding a small woolly cactus in a terracotta pot" />
        </figure>
      </div>
      <h2 id="contact-h">
        <a href={IG_DM} target="_blank" rel="noopener" aria-label={`Message ${HANDLE} on Instagram`}>
          {/* the letters lift one after another on hover */}
          {[...HANDLE].map((c, i) => (
            <span className="ch" key={i} style={{ transitionDelay: `${i * 18}ms` }}>{c}</span>
          ))}
        </a>
      </h2>
    </section>
  );
}
