const pictures = [
  { src: 'assets/web/jabal-amman-house.jpg', w: 1050, h: 1400, ar: '3/4',
    alt: 'An old limestone house with green shutters in a garden in Jabal Amman', cap: 'An old stone house in Jabal Amman' },
  { src: 'assets/web/lweibdeh-house.jpg', w: 1400, h: 1050, ar: '4/3',
    alt: 'A limestone villa with pointed arched windows, a palm and bougainvillea in Jabal Al-Lweibdeh', cap: 'Arches and bougainvillea in Jabal Al-Lweibdeh' },
  { src: 'assets/web/rainbow-street-stairs.jpg', w: 1400, h: 1400, ar: '1/1',
    alt: 'Stone stairs climbing from downtown Amman towards Rainbow Street', cap: 'The stairs up to Rainbow Street' },
];

export default function Intro() {
  return (
    <section className="intro wrap" aria-labelledby="name-h">
      <div className="grid">
        <div className="intro-pin">
          <h2 className="h2 rv" id="name-h">The beloved’s vine</h2>
          <span className="ar-big rv" style={{ '--i': 1 }} lang="ar" aria-hidden="true">كرمة المحبوب</span>
          <p className="statement rv" style={{ '--i': 2 }}>Garden as though you live for ever. Every plant here is grown to outlast the pot it came in.</p>
          <p className="rv" style={{ '--i': 3 }}>Karmet is a small grower in Amman. The stock lives on balconies and windowsills in a city of limestone, hills and long dry summers, so whatever leaves here is already used to the light you have.</p>
        </div>
        <div className="intro-pics">
          {pictures.map((pic) => (
            <figure key={pic.src} style={{ '--ar': pic.ar }}>
              <img className="rv rv-img" src={pic.src} width={pic.w} height={pic.h} loading="lazy" alt={pic.alt} />
              <figcaption className="cap">{pic.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
