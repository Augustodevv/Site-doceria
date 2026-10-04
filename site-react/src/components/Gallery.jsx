import { gallery, info } from "../data.js";

export default function Gallery() {
  return (
    <section className="section" id="instagram" aria-labelledby="insta-title">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="divider" aria-hidden="true">
            📸 ♥ 📸
          </div>
          <span className="eyebrow">Galeria viva</span>
          <h2 id="insta-title">Siga {info.instagram}</h2>
          <p>As produções mais recentes direto do nosso feed, em Camburizinho.</p>
        </div>

        <div className="grid-gallery reveal">
          {gallery.map((g) => (
            <a
              key={g.label}
              className="gallery-item"
              data-tone={g.tone}
              href={info.instagramUrl}
              target="_blank"
              rel="noopener"
              aria-label={`${g.label} — ver no Instagram ${info.instagram}`}
            >
              <span aria-hidden="true">{g.emoji}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
