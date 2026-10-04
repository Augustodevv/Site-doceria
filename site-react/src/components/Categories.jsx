import { categories, products } from "../data.js";

export default function Categories({ onPick }) {
  return (
    <section className="section" aria-labelledby="cat-title">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="divider" aria-hidden="true">
            ♥ 🥄 ♥
          </div>
          <span className="eyebrow">Nossas categorias</span>
          <h2 id="cat-title">Escolha por onde começar</h2>
          <p>Do bolo por encomenda ao kit completo da festa — tudo artesanal, tudo fresquinho.</p>
        </div>

        <div className="cat-track reveal">
          {categories.map((c) => {
            const n = products.filter((p) => p.cat === c.id).length;
            return (
              <a
                key={c.id}
                href="#cardapio"
                className="cat-card"
                data-tone={c.tone}
                onClick={(e) => {
                  e.preventDefault();
                  onPick(c.id);
                }}
              >
                <span className="cat-card__icon" aria-hidden="true">
                  {c.emoji}
                </span>
                <h3>{c.label}</h3>
                <span>{n} itens no cardápio</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
