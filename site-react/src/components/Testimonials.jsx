import { testimonials } from "../data.js";

export default function Testimonials() {
  return (
    <section className="section section--pink" id="depoimentos" aria-labelledby="dep-title">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="divider" aria-hidden="true">
            💬 ♥ 💬
          </div>
          <span className="eyebrow">Quem já provou, recomenda</span>
          <h2 id="dep-title">Depoimentos</h2>
          <p>Histórias de quem transformou nossa confeção em parte da própria celebração.</p>
        </div>

        <div className="grid-testimonials reveal">
          {testimonials.map((t) => (
            <blockquote className="quote" key={t.name}>
              <div className="quote__stars" aria-label={`${t.stars} de 5 estrelas`}>
                {"★".repeat(t.stars)}
                {"☆".repeat(5 - t.stars)}
              </div>
              <p>{t.text}</p>
              <footer>
                <span className="quote__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <span className="quote__who">
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
