import { IG_PROFILE } from '../data/plants.js';
import { credits } from '../data/credits.js';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-pic">
        <img src="assets/web/bougainvillea.jpg" width="1400" height="1050" loading="lazy" alt="Close view of magenta bougainvillea bracts covering a wall" />
      </div>
      <div className="foot-menu">
        <a className="wordmark" href="#top">Karmet <span lang="ar">كرمة المحبوب</span></a>
        <nav aria-label="Footer">
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#plants">The collection</a></li>
            <li><a href="#find">Find yours</a></li>
            <li><a href="#order">How to order</a></li>
            <li><a href={IG_PROFILE} target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </nav>
        <div className="foot-blocks">
          <div><h3>Where</h3><p>Amman, Jordan<br />Orders by Instagram message</p></div>
          <div><h3>Follow</h3><p><a className="link" href={IG_PROFILE} target="_blank" rel="noopener">@karmet_plants</a></p></div>
        </div>
        <details className="credits">
          <summary>Photo credits</summary>
          <ul>
            {credits.map((c) => (
              <li key={c.href}>
                <a href={c.href} target="_blank" rel="noopener">“{c.title}”</a>
                {c.author && <> by {c.author}</>}, <a href={c.licenseHref} target="_blank" rel="noopener">{c.license}</a>, via {c.via}
              </li>
            ))}
          </ul>
        </details>
        <p className="legal">© {new Date().getFullYear()} Karmet Plants, Amman.</p>
      </div>
    </footer>
  );
}
